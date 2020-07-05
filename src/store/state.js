// state 初始化值

export default {
    count:10,
    title: '个人博客',
    isCollapse: true,
    menuList: sessionStorage.getItem('menu') ? JSON.parse(sessionStorage.getItem('menu')) : null,
    routers: null,
    pathname: '',
    spinning: false,
    tabsList: [],
    roleList: []
};
