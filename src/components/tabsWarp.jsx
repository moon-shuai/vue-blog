import React from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import store from '@store';
import action from '@action';

const { TabPane } = Tabs;

const changeTab = (...a) => {
    const { routers, tabsList } = store.getState();
    const path = tabsList.filter(v => v.pathname === a[0])[0];
    routers.push(path.pathname + path.search);
};
const deleteTab = (path, type) => {
    if (type === 'remove') store.dispatch(action.deleteTabList(path));
};
@connect(
    state => ({
        pathname: state.pathname,
        menuList: state.menuList,
        routers: state.routers,
        tabsList: state.tabsList
    }),
    dispatch => ({
        updataTabList: _ => dispatch(action.updataTabList(_))
    })
)
class TabsWarp extends React.Component {
    shouldComponentUpdate({ menuList }) {
        const _this = this;
        if (menuList !== _this.props.menuList && _this.props.routers) {
            _this.props.updataTabList(_this.props.routers.location);
        }
        return true;
    }

    render() {
        const { pathname, tabsList } = this.props;
        const activeKey = pathname.split('?')[0];
        const list = tabsList.filter(v => ['/login'].indexOf(v.pathname) === -1);
        return (
            <div className="tabsWarp">
                {/* eslint-disable-next-line no-nested-ternary */}
                <Tabs onChange={changeTab} onEdit={deleteTab} activeKey={activeKey === '/login' ? (list.length ? list[0].pathname : '') : activeKey} type="editable-card" hideAdd>
                    {list.map(
                        v => <TabPane tab={v.name} key={v.pathname} closable={v.pathname === '/index' ? false : v.closable} />
                    )}
                </Tabs>
            </div>
        );
    }
}
export default TabsWarp;
