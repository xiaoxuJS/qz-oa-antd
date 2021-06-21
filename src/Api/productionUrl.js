import {
    http,
    ip
} from './http';

/**
 * 
 * @param {生产计划URL}
 * @returns 
 */

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
//添加留言
export function putSofPlanInsertLeave(data) {
    const url = ip + '/sof-plan/insert/leave';
    return http(url, "put", data)
}
//查看留言
export function getSofPlanFindLeave(data) {
    const url = ip + '/sof-plan/find/leave';
    return http(url, "get", data)
}
//删除留言
export function getSofPlanDeleteLeave(data) {
    const url = ip + '/sof-plan/delete/leave';
    return http(url, "get", data)
}
//终止生产计划
export function postSofPlanSuOrAc(data) {
    const url = ip + '/sof-plan/suOrAc';
    return http(url, "post", data)
}
//终止生产计划List
export function postSofPlanFindSuspend(data) {
    const url = ip + '/sof-plan/find/suspend';
    return http(url, "post", data)
}
//生产计划终止 - 审批
export function postSofPlanExecuteApprove(data) {
    const url = ip + '/sof-plan/executeApprove';
    return http(url, "post", data)
}
//合同到账金额
export function putSofPlanFundInsertFund(data) {
    const url = ip + '/sof-plan-fund/insert/fund';
    return http(url, "put", data)
}
//抄送财务List
export function postSofPlanFindFinancial(data) {
    const url = ip + '/sof-plan/find/financial';
    return http(url, "post", data)
}

