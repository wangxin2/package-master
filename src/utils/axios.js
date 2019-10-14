import GM from './common';
import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 导出
        if (response.headers && (response.headers['content-type'] === 'text/xml' || response.headers['content-type'] === 'application/x-msdownload' || response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
            return response;
        }
        return response.data;
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
            case 400:
                err.message = '错误请求';
                break;
            case 401:
                err.message = '未授权，请重新登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求错误,未找到该资源';
                break;
            case 405:
                err.message = '请求方法未允许';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                err.message = '服务器端出错';
                break;
            case 501:
                err.message = '网络未实现';
                break;
            case 502:
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'http版本不支持该请求';
                break;
            default:
                err.message = `连接错误${err.response.status}`;
            }
        } else {
            err.message = '连接到服务器失败';
        }
        return Promise.reject(err);
    }
);

export default {
    post (url, params, contentType) {
        const type = contentType === 'json' ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded';
        if (type === 'json') {
            params = JSON.stringify(params);
        } else {
            params = GM.CommonOper.paramObject(params);
        }
        return axios({
            method: 'post',
            url: url,
            data: params,
            timeout: 15000,
            headers: {
                'Content-Type': type
            }
        }).then(
            (response) => {
                if (response.success === false) {
                    return Promise.reject(response);
                } else {
                    return Promise.resolve(response);
                }
            }
        ).catch(
            (res) => {
                return Promise.reject(res);
            }
        );
    },
    get (url, params) {
        // 如果是get请求，则加上时间戳，避免缓存
        let strTime = (new Date()).getTime();
        url = GM.LayoutOper.addURLParam(url, 'timestamplp', strTime);
        return axios({
            method: 'get',
            url: url,
            params: params, // get 请求时带的参数
            timeout: 15000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(
            (response) => {
                if (response.success === false) {
                    return Promise.reject(response);
                } else {
                    return Promise.resolve(response);
                }
            }
        ).catch(
            (res) => {
                return Promise.reject(res);
            }
        );
    },
    uploadRequest (strUrl, formData) {
        if (GM.CommonOper.isStrNullOrEmpty(strUrl) || formData == null) {
            return;
        }
        return axios({
            method: 'post',
            url: strUrl,
            cache: false,
            data: formData,
            processData: false,
            contentType: false
        }).then(
            (response) => {
                if (response.success === false) {
                    return Promise.reject(response);
                } else {
                    return Promise.resolve(response);
                }
            }
        ).catch(
            (res) => {
                return Promise.reject(res);
            }
        );
    },
}