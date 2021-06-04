import {
    ip
} from './http';

//手签- 上传 - 文件
export function sysManuallyUrl() {
    const url = ip + '/sys/manually';
    return url;
}

//上传 - 文件 （包括头像）
export function sysUploadUrl() {
    const url = ip + '/sys/upload';
    return url;
}


