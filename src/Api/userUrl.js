import {
    http,
    ip
} from './http';
//个人线索-列表
export function sofClueFindClue(data) {
    const url = ip + '/sof-clue/find/clue';
    return http(url, "post", data)
}

export function putSofClueInsertClue(data) {
    const url = ip + '/sof-clue/insert/clue';
    return http(url, "put", data)
}
