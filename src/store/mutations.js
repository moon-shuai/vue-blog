// 处理状态（数据)的改变  mutations
// state 是初始值 在这里面进行改变
import types from './types';

export default {
    // 用一个变量来做名称 放在中括号里
    [types.INCREMENT] (state) {
        // add名称同actions中的commit
        state.count++;
    },
    [types.DECREMENT] (state) {
        state.count--;
        console.log(state);
    },
    [types.USER_DATA] (state,{menuList}){
        state.menuList = menuList;
    }
};