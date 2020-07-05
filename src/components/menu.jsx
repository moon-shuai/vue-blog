import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import action from '@action';
import { getRouteByPath } from '@util';
import { FormattedMessage } from 'react-intl';

const { SubMenu } = Menu;
@connect(
    state => ({
        isCollapse: state.isCollapse,
        routers: state.routers,
        pathname: state.pathname,
        menuList: state.menuList,
        tabsList: state.tabsList
    }),
    dispatch => ({ getMenu: () => dispatch(action.getMenu()) })
)
class MenuWarp extends React.Component {
    constructor(props) {
        super(props);
        const _this = this;
        _this.handleClick = _this.handleClick.bind(_this);
    }

    componentDidMount () {
        const _this = this;
        // const menusAuth = _this.props.menuList;
        // if (!menusAuth) _this.props.getMenu();
        _this.props.getMenu();
    }

    setOpenKeys() {
        const _this = this;
        let openKeys = this.props && _this.props.isCollapse && _this.props.pathname ? _this.props.pathname.split('/') : [];
        openKeys = openKeys.filter(v => v);
        openKeys = openKeys.map(v => {
            const str = v.split('?')[0];
            return `/${str}`;
        });
        if (openKeys.length) {
            const menusAuth = _this.props.menuList ? _this.props.menuList.lstSysAuthority : [];
            openKeys.pop();
            const _t = getRouteByPath(menusAuth, [openKeys[0]]);
            return [`${_t.path}$id=${_t.id}`];
        }
        return openKeys;
    }

    setSelectedKeys(menusAuth) {
        const _this = this;
        const path = _this.props.pathname.split('/').map(v => {
            const str = v.split('?')[0];
            return `/${str}`;
        });
        path.shift();
        const t = getRouteByPath(menusAuth, path);
        if (Object.keys(t).length) return [`${t.path}$id=${t.id}`];
        return [];
    }

    handleClick(path) {
        // 判断当前菜单是否有权限
        const _this = this;
        const key = path.keyPath.map(v => v.split('$id=')[0]);
        const name = key.reverse().join('');

        let route = _this.props.tabsList.filter(v => v.pathname === name);
        route = route.length ? route[0] : { pathname: name, search: '' };
        _this.props.routers.push(route.pathname + route.search);
    }

    // 渲染菜单
    renderMenu(menusAuth, isLeaf) {
        const _this = this;
        const menus = [];
        // const style = { display: _this.props.isCollapse ? 'inline-block' : 'none' };
        menusAuth.forEach(v => {
            if (!v.children || !v.children.length) {
                if (!isLeaf) {
                    menus.push(
                        <Menu.Item key={`${v.path}$id=${v.id}`}>
                            <Icon type={v.icon || 'team'} />
                            <span>
                                {v.name}
                            </span>
                        </Menu.Item>
                    );
                } else {
                    menus.push(<Menu.Item key={`${v.path}$id=${v.id}`}><span>{v.name}</span></Menu.Item>);
                }
            } else {
                const title = (
                    <span>
                        <Icon type={v.icon || 'team'} />
                        <span>
                            {v.name}
                        </span>
                    </span>
                );
                menus.push((
                    <SubMenu
                        key={`${v.path}$id=${v.id}`}
                        title={title}
                    >
                        {_this.renderMenu(v.children, true)}
                    </SubMenu>
                ));
            }
        });
        return menus;
    }

    render() {
        const _this = this;
        if (!_this.props || !_this.props.pathname || !_this.props.routers || !_this.props.menuList) return '';
        // const styleSheet= {
        //     width: _this.props.isCollapse ? 200 : 60
        // };
        const menusAuth = _this.props.menuList ? _this.props.menuList.lstSysAuthority : [];
        const menus = _this.renderMenu(menusAuth, false);
        const selectKey = _this.setSelectedKeys(menusAuth);
        const height = document.documentElement.clientHeight - 88;
        return (
            <div id="content-container">
                <div className="menuTop">
                    <h2><FormattedMessage id="title" defaultMessage="国际版运营管理平台" /></h2>
                </div>
                <Menu
                    onClick={this.handleClick}
                    // style={styleSheet}
                    inlineIndent={20}
                    theme="dark"
                    subMenuCloseDelay={0.15}
                    subMenuOpenDelay={0}
                    selectedKeys={selectKey}
                    defaultSelectedKeys={['/chamberManage$id=1100']}
                    defaultOpenKeys={_this.setOpenKeys()}
                    // inlineCollapsed={!_this.props.isCollapse}
                    mode="inline"
                    style={{ height, overflowY: 'auto' }}
                    className={!selectKey.length ? 'menuDafaul' : ''}
                >
                    {menus}
                </Menu>
                {_this.props.children}
            </div>
        );
    }
}
export { MenuWarp };
