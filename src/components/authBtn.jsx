import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ menuList: state.menuList }))
class AuthBtn extends React.Component {
    render() {
        const _this = this;
        const { type, filter } = _this.props;
        let flag = false;
        const user = _this.props.menuList || {};
        (user.sysButtonAuthority || []).map(v => {
            if (v.permission === type) flag = true;
            return v;
        });
        return _this.props.children && (filter === undefined || filter())
            && (type === undefined || flag)
            ? _this.props.children : null;
    }
}
export { AuthBtn };
