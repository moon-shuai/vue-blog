/* eslint-disable */
import { Loading, Message } from 'element-ui';
const axios = require('axios');

const target = process.env;
class Ajax {
    instance = axios.create({
        timeout: 5000
    });

    send(options) {
        if (!options.url) {
            console.error('请求地址未填写');
            return;
        }
        const method = options.method ? options.method.toLocaleLowerCase() : 'get';
        const data = options.data || {};
        const headers = options.headers || { Authorization:'Bearer'};
        let loadingInstance = options.loading ? Loading.service({ fullscreen: true, text: options.loading || '加载中' }) : null;
        (options.loading === undefined) && (options.loading = true);
        options.loading && loadingInstance;
        return new Promise((resolve, reject) => {
            this.instance.request({
                url: options.baseURL ? options.baseURL + options.url : target.VUE_APP_BASE_API + options.url,
                method, // 默认是 get
                headers,
                params: method !== 'post' ? data : null,
                data: method === 'post' ? data : null,
                timeout: options.timeout,
                responseType: options.responseType || 'json',
                withCredentials: true, // 默认的
            }).then(res => {
                options.loading && loadingInstance.close();
                if (options.responseType === 'text') {
                    resolve(res.data);
                    return;
                }
                const { data } = res;
                // data.httpCode = Number(data.httpCode);
                if ( Number(data.code) === 0) {
                    resolve(data.data);
                }else if (data.code === undefined) {
                    resolve(data);
                } else if (Number(data.code) === 90003) {
                    const url = target.API_ROOT.slice(0, -3);
                    window.location.href = `${url}/#/login`
                }else {
                    if(window.location.hash.search('login') == -1){
                        Message.error( res.data.msg || options.failMsg || '加载失败，请重试');
                        reject(res);
                    } else {
                        resolve(data.data);
                    }
                }
            }).catch(e => {
                options.loading && loadingInstance.close();
                Message.error(options.failMsg || e.msg || '请求失败，请重试');
                reject(e);
            });
        });
    }
}

export default config => new Ajax().send(config);
export const dataAjax = config => new Ajax().send(config);
export const get = (url,data,config = {}) => {
    config.method = 'get';
    config.url = url;
    config.data = data;
    return new Ajax().send(config);
};
export const post = (url,data,config = {}) => {
    config.method = 'post';
    config.url = url;
    config.data = data;
    return new Ajax().send(config);
};
