import {
    http,
    ip
} from './http';

//字段数据
// 格式: typeCode:  RESOURCE
// MATTER: 洽谈事项
// DEPLOY: 部署类型
// RESOURCE: 线索来源

export function getSysMarkFindMark(data) {
    const url = ip + '/sys-mark/find/mark';
    return http(url, "get", data)
}