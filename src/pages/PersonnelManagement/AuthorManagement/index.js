import React, { useState, useEffect, useCallback } from 'react';
import {
    getSysUserTreeUserByDpt
} from '../../../Api/listUrl';
import {
    getSysPermissionFindPermission,
    getSysUserFindPermission,
    postSysUserBindPer
} from '../../../Api/setUrl';
import {
    AuthorManagementAll
} from './style';
import {
    PageHeader,
    Col,
    Row,
    message,
    Tree,
    Form,
    Button,
    Space,
    Checkbox
} from 'antd';
const { TreeNode } = Tree;

const AuthorManagement = () => {
    const [form] = Form.useForm();
    const { setFieldsValue, resetFields } = form;
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const [checkedKeys, setCheckedKeys] = useState([]); //选中id
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [treeList, setTreeList] = useState([]);
    const [authorList, setAuthorList] = useState([]);
    const treeFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysUserTreeUserByDpt();
                if (code === '20000') {
                    let treeArray = [];
                    data.forEach(element => {
                        let arr = []
                        element.userTree.forEach(item => {
                            arr.push({
                                title: item.name,
                                key: item.id
                            })
                        });
                        treeArray.push({
                            title: element.department,
                            key: element.id,
                            children: arr
                        })
                    });
                    setTreeList(treeArray)
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    const authorFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysPermissionFindPermission();
                if (code === '20000') {
                    setAuthorList(data)
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        treeFun();
        authorFun();
    }, [treeFun, authorFun])


    const onExpand = expandedKeys => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    };
    const onCheck = checkedKeys => {
        const id = checkedKeys.length === 0 ? [] : [checkedKeys[checkedKeys.length - 1]];
        ; (async () => {
            const { code, msg, data } = await getSysUserFindPermission({ id: id[0] });
            if (code === '20000') {
                resetFields();
                let obj = {};
                if (data.length > 0) {
                    for (const key in data) {
                        let arr = [];
                        data[key].tree.forEach(element => {
                            arr.push(element.id);
                        });
                        obj[data[key].id] = arr
                    }
                    setFieldsValue(obj);
                }

            } else {
                message.error(msg);
            }
        })();
        setCheckedKeys(id);
    };

    const onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeys)
    };

    const renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode checkable={false} title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} {...item} />;
        });
    const onFinish = (values) => {
        let data = [];
        for (const key in values) {
            if (values[key]) {
                let arr = [key, ...values[key]];
                console.log(arr)
                data.push.apply(data, arr);
            }
        }
        console.log(checkedKeys);
        ; (async () => {
            const { code, msg } = await postSysUserBindPer({ userId: checkedKeys[0], permissionId: data });
            if (code === '20000') {
                message.success('修改成功！')
            } else {
                message.error(msg);
            }
        })();
        console.log(data)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <AuthorManagementAll>
        <PageHeader
            className="site-page-header"
            title="权限管理"
        ></PageHeader>
        <Row>
            <Col span={8}>
                {
                    treeList.length > 0 ? <Tree
                        checkable
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        autoExpandParent={autoExpandParent}
                        onCheck={onCheck}
                        checkedKeys={checkedKeys}
                        onSelect={onSelect}
                        selectedKeys={selectedKeys}
                    >
                        {renderTreeNodes(treeList)}
                    </Tree> : null
                }

            </Col>
            <Col span={16}>
                <div className='border-div'>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}
                    >
                        {
                            authorList.map(element => <Form.Item label={element.mainMenu} name={element.id}>
                                <Checkbox.Group>
                                    <Space wrap>
                                        {
                                            element.tree.map(item => <Checkbox value={item.id} style={{ lineHeight: '32px' }}>
                                                {item.mainMenu}
                                            </Checkbox>)
                                        }
                                    </Space>
                                </Checkbox.Group>
                            </Form.Item>)
                        }
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                修改
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    </AuthorManagementAll>
}
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};
export default AuthorManagement;