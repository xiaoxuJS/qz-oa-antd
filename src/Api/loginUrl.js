import {
    http,
    ip
} from './http';
//登录
export function postSysUserLogin(data) {
    const url = ip + '/sys-user/login';
    return http(url, "post", data)
}
//获取验证码
export function getSysGetCode(data) {
    const url = ip + '/sys/getCode';
    return http(url, "get", data)
}

