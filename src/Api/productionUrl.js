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
//计划明细
export function getSofPlanDetailPlanDetail(data) {
    const url = ip + '/sof-plan-detail/plan/detail';
    return http(url, "get", data)
}
//完成任务
export function postSofPlanDetailCompleteTask(data) {
    const url = ip + '/sof-plan-detail/complete/task';
    return http(url, "post", data)
}
//签收任务
export function putSofPlanDetailSignTask(data) {
    const url = ip + '/sof-plan-detail/sign/task';
    return http(url, "put", data)
}
//生产计划完结列表
export function postSofPlanFindAllPlan(data) {
    const url = ip + '/sof-plan/findAll/plan';
    return http(url, "post", data)
}
//生产计划删除
export function getSofPlanDeletePlan(data) {
    const url = ip + '/sof-plan/delete/plan';
    return http(url, "get", data)
}

