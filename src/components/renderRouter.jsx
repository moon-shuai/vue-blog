import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import store from '@store';
import { formatUserRouter } from '@util';
import { getRouterPath, getFixedRoutes } from '../router';
import { Header } from './header';
import { MenuWarp } from './menu';
import { SpinWarp } from './spinWarp.jsx';
import TabsWarp from './tabsWarp';

const routesData = getRouterPath();
// 路由拦截
const beforeEach = (route, obj) => {
    const result = getFixedRoutes();
    if ((!obj.children || !obj.children.length) && result.indexOf(obj.path) === -1) {
        // const { menuList } = store.getState();
        const menuList = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
        if (!menuList) {
            return null;
        }
        formatUserRouter('', menuList.lstSysAuthority || [], result);
        // 判断当前路由是否有权限
        if (result.indexOf(obj.path) === -1) {
            setTimeout(() => {
                window.location.href = '/pmoweb/#/warnshow?type=2';
            }, 300);
            return null;
        }
    }
    return route;
};

const loop = (arr, flag) => {
    const style = {
        width: '100%',
        height: '100%',
        padding: '0',
        boxSizing: 'border-box',
        // background: '#f5f5f5',
        WebkitBoxFlex: 1,
        msFlex: 1,
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative'
    };
    const t = arr.map(v => {
        const t = loop(v.children || [], (flag + 1));
        if (!v.isFixed && flag === 1) {
            return (
                <Route
                    path={v.path}
                    key={v.path}
                    render={() => (
                        <div className="container-inner">
                            <div className="main">
                                <MenuWarp />
                                <div style={style}>
                                    <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 100, width: 'calc(100% - 281px)', background: '#fff' }}>
                                        <Header />
                                        <TabsWarp />
                                    </div>
                                    <div className="warpRight" style={{ paddingTop: '114px' }}>{beforeEach(<v.component>{t}</v.component>, v)}</div>
                                </div>
                            </div>
                        </div>
                    )}
                />
            );
        }
        return (
            <Route path={v.path} key={v.path} render={() => beforeEach(<v.component>{() => t}</v.component>, v)} />
        );
    });
    return t;
};

@connect(state => (
    {
        routers: state.routers,
        pathname: state.pathname
    }
))
class RenderRouter extends Component {
    shouldComponentUpdate({ pathname }) {
        const _this = this;
        if (pathname !== _this.props.pathname) {
            _this.props.routers && _this.props.routers.push(pathname);
        }
        return true;
    }

    render() {
        return (<div className="container"><SpinWarp />{loop(routesData, 0)}</div>);
    }
}
export { RenderRouter };
