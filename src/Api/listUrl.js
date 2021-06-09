import {
    http,
    ip
} from './http';
//部门list -- 下拉
export function getSysDepartmentFindList(data) {
    const url = ip + '/sysDepartment/find/list';
    return http(url, "get", data)
}
//用户列表
export function postSysUserFindPage(data) {
    const url = ip + '/sys-user/findPage';
    return http(url, "post", data)
}
//客户List -- 下拉
export function getSofClientFindDropClient(data) {
    const url = ip + '/sof-client/find/drop-client';
    return http(url, "get", data)
}
//用户List -- 下拉
export function getSysUserFindDropUser(data) {
    const url = ip + '/sys-user/find/drop-user';
    return http(url, "get", data)
}
//部门-用户
export function getSysUserTreeUserByDpt(data) {
    const url = ip + '/sys-user/treeUserByDpt';
    return http(url, "get", data)
}

