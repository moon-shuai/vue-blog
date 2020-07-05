import { Message } from 'element-ui';

const { dataAjax } = require('../../api');

// 普通IMD用户登录
export const login = data => (
    dataAjax({
        url: '/login',
        method: 'post',
        loading:'加载中',
        data: {
            userName: data.userName,
            passWord: data.passWord
        }
    })
);

// 获取用户信息
export const menuInfor = () => (
    dataAjax({
        url: '/user/current',
        loading:'加载中'
    })
);


// 枚举请求
export const getEnum = data => dataAjax({
    url: '/dicparam/getByKey',
    loading: true,
    data
});

// 分页配置
export const pageOption = () => (
    {
        pageSizeOptions: ['10', '20', '30', '50', '100'],
        pageOption: {
            total: 0,
            current: 1,
            pageSize: 10
        }
    }
);
// 获取URL参数
export const parseUrl = path => {
    let url = path;
    const hash = decodeURI(url);
    url = /\?/.test(hash) ? hash.substr(hash.indexOf('?') + 1) : hash;
    const obj = {};
    url.split('&').forEach(item => {
        const v = item.split('=');
        const val = v[1];
        const key = v[0];
        obj[key] = val;
    });
    return obj;
};
// 设置URL参数
export const setUrlParam = (key, value) => {
    let hash = window.location.href;
    const reg = new RegExp(`(^|&)${key}([^&]*)(&|$)`, 'i');
    const r = hash.match(reg);
    if (r) {
        const arrHash = hash.split(`${key}=${r[2]}`);
        hash = `${arrHash[0]}${key}=${value + arrHash[1]}`;
    } else {
        hash += `${(hash ? '&' : '')}${key}=${value}`;
    }
    return hash;
};
// 全局提示
export const message = {
    success (content, duration = 1, onClose) {
        Message.closeAll();
        return Message.success(content, duration, onClose);
    },
    error (content, duration = 2, onClose) {
        Message.closeAll();
        return Message.error(content, duration, onClose);
    },
    info (content, duration = 2, onClose) {
        Message.closeAll();
        return Message.info(content, duration, onClose);
    },
    warning (content, duration = 2, onClose) {
        Message.closeAll();
        return Message.warning(content, duration, onClose);
    },
    warn (content, duration = 2, onClose) {
        Message.closeAll();
        return Message.warn(content, duration, onClose);
    },
    loading (content, duration = 1, onClose) {
        Message.closeAll();
        return Message.loading(content, duration, onClose);
    },
    open (config) {
        Message.closeAll();
        return Message.open(config);
    }
};
/** 根据路径获取路由对象
 * @param {*} array 菜单数据
 * @param {*} pathname 路径为数组
 */
export const getRouteByPath = (array, pathname) => {
    for (let index = 0; index < array.length; index++) {
        const v = array[index];
        if (v.path === pathname[0]) {
            pathname.shift();
            if (pathname.length === 0 || !v.children || !v.children.length) {
                return Object.assign({}, v);
            }
            return getRouteByPath(v.children || [], pathname);
        }
    }
    return {};
};

// 获取用户可点击的路由
export const formatUserRouter = (path, arr, result) => {
    for (let index = 0; index < arr.length; index++) {
        const v = arr[index];
        if (v.children && v.children.length) {
            formatUserRouter(path + v.path, v.children, result);
        } else {
            result.push(path + v.path);
        }
    }
    return path;
};
// 获取当前设备缩放比例
export const ratio = 1920 / window.screen.availWidth;
export const tableMaxHeight = document.documentElement.clientHeight - 300;
const { clientWidth } = document.documentElement;
export const tableMaxWidth = clientWidth - (clientWidth === 1920 ? 200 : 60) - 22;
export const resizeTable = obj => {
    let sum = 0;
    const t = clientWidth - 280 - 81;
    obj.map(v => {
        sum += v.width || v.minWidth || v.maxWidth || 0;
        return v;
    });
    return sum > t ? sum : 1200;
};
