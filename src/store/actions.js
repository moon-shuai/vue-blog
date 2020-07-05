// actions 定义方法，要执行的操作 流程判断/异步请求等
import { menuInfor } from '@util';
import types from './types';


export default {
    increment ({ commit }) {
        commit(types.INCREMENT); // 修改数据的唯一方式就是显示的提交mutation
    },
    decrement ({ commit, state }) {
        console.log(state);
        if (state.count >= 10) {
            commit(types.DECREMENT);
        }
    },

    toggle (flag) {
        return {
            type: types.TOGGLE_MENU,
            value: flag
        };
    },
    async getMenu ({commit}) {
        const result = await menuInfor();
        commit(types.USER_DATA,{menuList:result});
    },
    setRouter (obj) {
        return {
            type: types.ROUTER_OBJECT,
            value: obj
        };
    },
    updataRouter (obj) {
        return {
            type: types.UPDATA_ROUTER,
            value: obj
        };
    },
    toggleLoading (flag) {
        return {
            type: types.LOADING_STATUS,
            value: flag
        };
    },
    updataTabList (obj) {
        return {
            type: types.TAB_LIST,
            value: obj
        };
    },
    deleteTabList (obj) {
        if (obj) {
            return {
                type: types.TAB_LIST_DEL,
                value: obj
            };
        }
        return {
            type: types.TAB_LIST_DEL_ALL,
            value: null
        };
    }
};