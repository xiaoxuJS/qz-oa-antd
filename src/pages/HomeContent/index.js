import React from 'react';
import {
    HomeContentAll,
    HomeContentTop
} from './style';
import {
    Avatar, Image
} from 'antd';
import { Upload, message, Button, Statistic } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const HomeContent = () => {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return <HomeContentAll Height={(document.body.clientHeight - 64) + 'px'}>
        <HomeContentTop>
            <div className="left">
                <Avatar
                    size={100}
                    src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                />
            </div>
            <div className="centre">
                <p>
                    你好！xiaoxujs，祝您今天工作顺利！
                </p>
                <div>
                    签名：<Image width={40} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传签名</Button>
                    </Upload>
                </div>
            </div>
            <div className = 'right'>
                <Statistic title="待处理" value={3} />
            </div>

        </HomeContentTop>
    </HomeContentAll>
}

export default HomeContent;