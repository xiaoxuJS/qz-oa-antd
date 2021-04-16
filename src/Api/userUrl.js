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