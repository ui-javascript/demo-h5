import axios from "axios";
import qs from "./utils/queryString";

let token = qs.getValue("token");
let axiosIns = axios.create({});

axiosIns.defaults.timeout = 5000;
axiosIns.defaults.baseURL = "";

// http request 拦截器
axiosIns.interceptors.request.use(
    config => {
        switch (config.method.toLocaleUpperCase()) {
            case "GET":
                config.params.token = token;
                for (let v in config.params) {
                    config.params[v] = encodeURIComponent(config.params[v]);
                }
                break;
            case "POST":
                config.data.token = token;
                for (let v in config.data) {
                    config.data[v] = encodeURIComponent(config.data[v]);
                }
                break;
            default:
                config.data.token = token;
                for (let v in config.data) {
                    config.data[v] = encodeURIComponent(config.data[v]);
                }
                break;
        }
        config.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axiosIns.interceptors.response.use(
    res => {
        return res;
    },
    err => {
        return Promise.reject(err);
    }
);
// 导出方法
export { fetch, post, patch, put };

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axiosIns
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns.post(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns.patch(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axiosIns.put(url, data).then(
            res => {
                resolve(res.data);
            },
            err => {
                reject(err);
            }
        );
    });
}
