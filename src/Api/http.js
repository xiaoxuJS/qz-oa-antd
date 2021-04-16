import Axios from 'axios';
let ip = "";
if(process.env.NODE_ENV === 'development') { //开发环境;
    ip = "http://192.168.3.5:9829/oa"; //服务器地址
}else if(process.env.NODE_ENV === 'production') { // 打包环境
    ip = ""; //服务器地址
}

//封装请求方法
const http = (
    url,  //地址
    method, //请求方式
    args = {} //参数
) => {
    const xhrArgsName = (method === "get" || method === 'delete') ? "params" : "data"; //根据请求方式,判断携带的参数类型;
    return new Promise((resolve, reject) => {
        Axios({
            url,
            method,
            [xhrArgsName]:args
        }).then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })
};

export {
    http,
    ip
};