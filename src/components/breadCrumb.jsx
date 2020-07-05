import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';

const loop = (array, aFind) => {
    for (let index = 0; index < array.length; index += 1) {
        const v = array[index];
        if (aFind.indexOf(v.authorityValue) !== -1) {
            return [v].concat(loop((v.childAuthority || []), aFind));
        }
    }
    return [];
};
@connect(state => ({ ...state }))
class BreadCrumbWarp extends React.Component {
    render() {
        const _this = this;
        let path = (_this.props.routers && _this.props.routers.location.pathname) || '';
        path = path.split('/').filter(v => v).map(v => `/${v}`);
        const menu = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).lstSysAuthority : [];
        const tmp = loop(menu, (path || []));
        const t = (
            <Breadcrumb>
                {tmp.map(v => (
                    <Breadcrumb.Item key={v.name}>{v.name}</Breadcrumb.Item>
                )
                )}
            </Breadcrumb>
        );
        return t;
    }
}
export { BreadCrumbWarp };
