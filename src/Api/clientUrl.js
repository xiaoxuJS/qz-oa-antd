import {
    http,
    ip
} from './http';
//企业客户-合作客户列表
export function postSofClientFindClient(data) {
    const url = ip + '/sof-client/find/client';
    return http(url, "post", data)
}
//客户新增
export function putSofClientInsertClient(data) {
    const url = ip + '/sof-client/insert/client';
    return http(url, "put", data)
}
//客户删除
export function getSofClientDeleteClient(data) {
    const url = ip + '/sof-client/delete/client';
    return http(url, "get", data)
}
//客户回显
export function getSofClientEchoClient(data) {
    const url = ip + '/sof-client/echo/client';
    return http(url, "get", data)
}
//客户更新
export function postSofClientUpdateClient(data) {
    const url = ip + '/sof-client/update/client';
    return http(url, "post", data)
}


