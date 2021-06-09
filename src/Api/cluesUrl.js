import {
    http,
    ip
} from './http';
//线索池- 查询
// distribution: (true:已分配)(false:未分配) 必填
// clientName: 客户名称
// deploy: 部署类型
// turnover: 成交率
// currentPage: 当前页 必填
export function postSofClueFindPoolClue(data) {
    const url = ip + '/sof-clue/find/pool-clue';
    return http(url, "post", data)
}
//线索分配
export function getSofClueDistributionClue(data) {
    const url = ip + '/sof-clue/distribution/clue';
    return http(url, "get", data)
}
//线索-状态更新
export function getSofClueUpdateClue(data) {
    const url = ip + '/sof-clue/update/clue';
    return http(url, "get", data)
}
//线索删除
export function getSofClueDeleteClue(data) {
    const url = ip + '/sof-clue/delete/clue';
    return http(url, "get", data)
}



