import React, { useCallback, useEffect, useState } from "react";
//api
import { getSysMarkFindMark } from '../../../../../../Api/communalUrl';
import { putSofClueRecordInsertRecord } from '../../../../../../Api/userUrl';
//时间
import moment from 'moment';
//antd
import { Modal, Form, Input, DatePicker, message, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

/**
 * @author 徐博亚
 * @param { booler } clueIngModalShow (控制当前组件显示隐藏)
 * @param { Fun } handleClueIngModalShow (控制当前组件显示隐藏的函数)
 */
const ClueIngModal = ({ clueIngModalShow, handleClueIngModalShow }) => {
  const [form] = Form.useForm();
  const { resetFields, validateFields } = form;
  const [markValue, setMarkValue] = useState([]); //事项列表
  const handleClueIngModalOk = () => {
    validateFields().then((values) => {
      const clueId = sessionStorage.getItem('myClueId');
      ; (async () => {
        const promes = {
          clueId: clueId,
          content: values.content,
          matter: values.matter,
          negotiationTime: moment(values.negotiationTime).format('YYYY-MM-DD'),
          nextTime: moment(values.nextTime).format('YYYY-MM-DD')
        }
        const { code } = await putSofClueRecordInsertRecord(promes);
        if (code === '20000') {
          message.success('线索跟进填写成功！');
          sessionStorage.removeItem('myClueId');
          handleClueIngModalShow(false);
        }
      })();

    })

  };
  const handleCancel = () => {
    handleClueIngModalShow(false)
  };
  const getMatter = useCallback(() => {
    const promse = {
      typeCode: 'MATTER'
    }
      ; (async () => {
        const { code, data } = await getSysMarkFindMark(promse);
        if (code === "20000") {
          setMarkValue(data);
        }
      })();
  }, []);

  useEffect(() => {
    resetFields();
    getMatter();
  }, [clueIngModalShow, resetFields])
  return (
    <Modal
      title="线索跟进"
      visible={clueIngModalShow}
      onOk={handleClueIngModalOk}
      onCancel={handleCancel}
      forceRender={true}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        form={form}
      >
        <Form.Item
          label="洽谈事项"
          name="matter"
          rules={[{ required: true, message: '请选择洽谈事项!' }]}
        >
          <Select placeholder="请选择洽谈事项">
            {markValue
              ? markValue.map((item) => {
                return (
                  <Option
                    key={item.markValue}
                    value={item.markValue}
                  >
                    {item.markName}
                  </Option>
                );
              })
              : null}
          </Select>
        </Form.Item>

        <Form.Item
          label="洽谈内容"
          name="content"
          rules={[{ required: true, message: '请输入洽谈内容!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="negotiationTime" label="洽谈时间">
          <DatePicker />
        </Form.Item>
        <Form.Item name="nextTime" label="下次联系时间">
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
export default ClueIngModal;
