import {
    http,
    ip
} from './http';
//添加生产计划
export function putSofPlanInsertPlan(data) {
    const url = ip + '/sof-plan/insert/plan';
    return http(url, "put", data)
}
//生产计划列表
export function postSofPlanFindPlan(data) {
    const url = ip + '/sof-plan/find/plan';
    return http(url, "post", data)
}

