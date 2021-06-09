import {
    http,
    ip
} from './http';
//部门列表
export function postSysDepartmentFindDepartment(data) {
    const url = ip + '/sysDepartment/find/department';
    return http(url, "post", data)
}
//部门新增
export function putSysDepartmentInsertDepartment(data) {
    const url = ip + '/sysDepartment/insert/department';
    return http(url, "put", data)
}
//权限管理列表
export function getSysPermissionFindPermission(data) {
    const url = ip + '/sysPermission/find/permission';
    return http(url, "get", data)
}
//用户权限信息查询
export function getSysUserFindPermission(data) {
    const url = ip + '/sys-user/findPermission';
    return http(url, "get", data)
}
//权限信息维护-个人权限修改
export function postSysUserBindPer(data) {
    const url = ip + '/sys-user/bindPer';
    return http(url, "post", data)
}
//部门设置负责人
export function postSysDepartmentUpdateDepartment(data) {
    const url = ip + '/sysDepartment/update/department';
    return http(url, "post", data)
}





