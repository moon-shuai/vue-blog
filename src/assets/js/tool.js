import store from '@store';

// 数据搜索
export const filter = (str, opt) => {
    const reg = new RegExp(str, 'ig');
    if (str && !reg.test(opt)) {
        return false;
    }
    return true;
};
// 数字每三位加逗号
export const thousands = num => {
    num = Number(num).toFixed(2); // 保留两位小数
    const str = num.toString();
    const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, '$1,');
};
// 乘法
export const mult = function mult(...arr) {
    let f = 0;
    let sum = 1;
    arr.map(v => {
        const str = v.toString();
        if (str.indexOf('.') !== -1 && str.length - str.indexOf('.') + 1 > f) {
            f = str.length - str.indexOf('.') - 1;
        }
        return v;
    });
    arr.map(v => {
        sum *= Math.round(Number(v) * (10 ** f));
        return v;
    });
    return sum / ((10 ** f) ** (arr.length));
};
// 加法
export const add = function add(...arr) {
    let f = 0;
    let sum = 0;
    arr.map(v => {
        const str = v.toString();
        if (str.indexOf('.') !== -1 && str.length - str.indexOf('.') + 1 > f) {
            f = str.length - str.indexOf('.') - 1;
        }
        return v;
    });
    arr.map(v => {
        sum += Math.round(Number(v) * (10 ** f));
        return v;
    });
    return sum / (10 ** f);
};

// 对比两个对象值是否相等
export const isObjectValueEqual = (a, b) => {
    // 取对象a和b的属性名
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
};

// 获取前1个月
function mGetDate(year, month) { // 获取每个月有多少天
    const d = new Date(year, month, 0);
    return d.getDate();
}
export function getMonthBefore(data) {
    let year;
    let month;
    let date;
    const currDate = new Date(data);
    year = currDate.getFullYear();
    month = currDate.getMonth() - 1;
    date = currDate.getDate();
    switch (month) {
    case 1:
        month += 11;
        year--;
        break;
    default:
        month += 1;
        break;
    }
    if (date > mGetDate(year, month)) {
        date = mGetDate(year, month);
    }
    month = (month < 10) ? (`0${month}`) : month;
    const resultDate = `${year}-${month}-${date}`;
    return resultDate;
}

// 根据key查询枚举的label
export const getLabel = (key, arr) => {
    for (let index = 0; index < arr.length; index++) {
        const obj = arr[index];
        if (obj.value === Number(Number(key).toFixed(2))) {
            return obj.label;
        }
    }
    return '';
};

// number转百分百
export const toPercent = point => {
    let str = Number(point * 100);
    str += '%';
    return str;
};

// 计算字节长度
export const getLength = str => {
    // 中文2字节，英文1字节
    let realLength = 0;
    const len = str.length;
    let charCode = -1;
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
    }
    return realLength;
};

// 生成随机数
export const getRandom = str => {
    const seed = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p',
        'Q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '2', '3', '4', '5', '6', '7', '8', '9'];
    const seedlength = seed.length;
    let createPassword = '';
    for (let i = 0; i < str; i++) {
        const j = Math.floor(Math.random() * seedlength);
        createPassword += seed[j];
    }
    return createPassword;
};

// 获取Cookie
export function getCookie(key) {
    const name = `${key}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

// 设置Cookie
export function setCookie(cName, value, expiredays) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = `${cName}=${escape(value)}${(expiredays == null) ? '' : `;expires=${exdate.toGMTString()}`}`;
}

// 删除Cookie
export function delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cval = getCookie(name);
    if (cval != null) {
        document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
    }
}

// 校验当前用户是否有按钮权限
export function getBtnAuth(type) {
    let flag = true;
    const user = store.getState().menuList || {};
    (user.sysButtonAuthority || []).forEach(v => {
        if (v.permission === type) flag = false;
    });
    return flag;
}
