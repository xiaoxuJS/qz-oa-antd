import React, {useState, useEffect, useCallback} from 'react';
import {
    getSysUserEchoManually,
    getSysUserUpdateManually
} from '../../Api/userUrl';
import {
    sysManuallyUrl
} from '../../Api/fileUrl';
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
    const [imgUrl, setImgUrl] = useState(null); // 手签图片地址
    const imgUrlFun = useCallback(
        () => {
            ;(async () => {
                const {code, msg, data} = await getSysUserEchoManually({id: sessionStorage.getItem('userId')});
                if(code === '20000') {
                    setImgUrl(data)
                }else{
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        imgUrlFun();
    }, [imgUrlFun])
    const props = {
        name: 'file',
        action: sysManuallyUrl(),
        headers:{
            authentication: localStorage.getItem("token") 
        },
        onChange(info) {
            if (info.file.status === 'done') {
                ;(async () => {
                    const {code, msg} = await getSysUserUpdateManually({id: sessionStorage.getItem('userId'), manuallyUid: info.file.response.data});
                    if(code === '20000') {
                        message.success('手签更新成功！');
                        imgUrlFun();
                    }else{
                        message.error(msg);
                    }
                })();
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
                    src={<Image src=  {imgUrl ? imgUrl:  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}     />}
                />
            </div>
            <div className="centre">
                <p>
                    你好！xiaoxujs，祝您今天工作顺利！为了联盟！
                </p>
                <div>
                    签名：<Image width={40} src={imgUrl ? imgUrl:  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传签名</Button>注：上传竖屏拍摄签名
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