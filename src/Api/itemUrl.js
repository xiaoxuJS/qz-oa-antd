import {
    http,
    ip
} from './http';
//项目-列表
export function postSofItemFindItem(data) {
    const url = ip + '/sof-item/find/item';
    return http(url, "post", data)
}
//项目-新增
export function postSofItemInsertItem(data) {
    const url = ip + '/sof-item/insert/item';
    return http(url, "put", data)
}
//项目-修改
export function postSofItemUpdateItem(data) {
    const url = ip + '/sof-item/update/item';
    return http(url, "post", data)
}
//项目-阶段状态
export function getSofItemFindLogItem(data) {
    const url = ip + '/sof-item/findLog/item';
    return http(url, "get", data)
}
//项目-阶段更新
export function postSofItemLogItem(data) {
    const url = ip + '/sof-item/log/item';
    return http(url, "post", data)
}
//项目-回显/详情
export function getSofItemFindDetailsItem(data) {
    const url = ip + '/sof-item/find/details-item';
    return http(url, "get", data)
}
//项目-删除
export function getSofItemDeleteItem(data) {
    const url = ip + '/sof-item/delete/item';
    return http(url, "get", data)
}

