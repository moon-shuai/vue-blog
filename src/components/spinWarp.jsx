import React from 'react';
import { Spin, Icon } from 'antd';
import { connect } from 'react-redux';

const antIcon = <Icon type="loading" style={{ fontSize: 46 }} spin />;
@connect(state => ({
    spinning: state.spinning
}))
class SpinWarp extends React.Component {
    render() {
        const _this = this;
        return <Spin delay="300" wrapperClassName="loadwarp" size="large" spinning={_this.props.spinning} indicator={antIcon} />;
    }
}
export { SpinWarp };
