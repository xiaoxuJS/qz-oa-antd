import {
    http,
    ip
} from './http';
//项目-列表
export function postSofItemFindItem(data) {
    const url = ip + '/sof-item/find/item';
    return http(url, "post", data)
}
//项目-列表
export function postSofItemInsertItem(data) {
    const url = ip + '/sof-item/insert/item';
    return http(url, "put", data)
}
