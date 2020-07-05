// getter 用来获取属性 实时监听state值的变化(最新状态)


export default {
    count(state) {
        return state.count;
    },
    count1(state) {
        return state.count;
    },
    isEvenorOdd(state) {
        return state.count % 2 == 0 ? "偶数" : "基数";
    }
};