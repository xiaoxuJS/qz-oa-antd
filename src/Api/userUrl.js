import {
    http,
    ip
} from './http';
//个人线索-列表
export function sofClueFindClue(data) {
    const url = ip + '/sof-clue/find/clue';
    return http(url, "post", data)
}
//添加个人线索
export function putSofClueInsertClue(data) {
    const url = ip + '/sof-clue/insert/clue';
    return http(url, "put", data)
}
//详情页
export function getSofClueFindDetailClue(data) {
    const url = ip + '/sof-clue/find/detail-clue';
    return http(url, 'get', data)
}
//更新个人线索接口
export function postSofClueUpdateClue(data) {
    const url = ip + '/sof-clue/update/clue';
    return http(url, "post", data)
}
//删除个人线索接口
export function getSofClueDeteleClue(data) {
    const url = ip + '/sof-clue/delete/clue';
    return http(url, "get", data)
}

//线索-状态更新 -- 目前不能转客户
export function getSofClueUpdateClue(data) {
    const url = ip + '/sof-clue/update/clue';
    return http(url, "get", data)
}

//线索-跟踪纪录
export function putSofClueRecordInsertRecord(data) {
    const url = ip + '/sof-clue-record/insert/record';
    return http(url, "put", data)
}
//用户注册
export function putSysUserRegisterUser(data) {
    const url = ip + '/sys-user/registerUser';
    return http(url, "put", data)
}
//更新手签
export function getSysUserUpdateManually(data) {
    const url = ip + '/sys-user/updateManually';
    return http(url, "get", data)
}
//手签--回显
export function getSysUserEchoManually(data) {
    const url = ip + '/sys-user/echoManually';
    return http(url, "get", data)
}
//修改个人资料 -- 回显
export function getSysUserUpdMaterial(data) {
    const url = ip + '/sys-user/updMaterial';
    return http(url, "get", data)
}
//修改个人资料
export function postSysUserUpdMaterial(data) {
    const url = ip + '/sys-user/updMaterial';
    return http(url, "post", data)
}
//删除用户
export function getSysUserDeleteUser(data) {
    const url = ip + '/sys-user/deleteUser';
    return http(url, "get", data)
}