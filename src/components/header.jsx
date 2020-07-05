import React from 'react';
import { Modal } from 'antd';
import { autobind } from 'core-decorators';
import { language } from '@com/base.jsx';
import { connect } from 'react-redux';
import { AuthBtn } from '@com/authBtn.jsx';
import action from '@action';
import { FormattedMessage, intlShape } from 'react-intl';
import { delCookie, getBtnAuth } from '@tool';
// const HomeLogout = require('@img/HomeLogout.png')
const { Message } = require('@util');

// const language = [
//     {
//         name: '简体中文',
//         value: 'zh-CN'
//     },
//     {
//         name: '繁体中文',
//         value: 'zh_TW'
//     }
//     // {
//     //     name: 'English',
//     //     value: 'en-US'
//     // }
// ];

// 切换主题
const changeTheme = val => {
    let dom = window.document.getElementById('theme');
    if (!dom) {
        dom = window.document.createElement('link');
        dom.setAttribute('id', 'theme');
        dom.setAttribute('rel', 'stylesheet');
        document.getElementsByTagName('head')[0].appendChild(dom);
    }
    dom.setAttribute('href', `./static/theme/${val}.css`);
    localStorage.setItem('theme', val);
};

const theme = localStorage.getItem('theme') || 'green';
changeTheme(theme);

@connect(
    state => ({
        menuList: state.menuList,
        routers: state.routers,
        title: state.title,
        userName: state.userName,
        adminFlag: state.adminFlag
    }),
    dispatch => ({
        getMenu: () => dispatch(action.getMenu()),
        deleteTabList: flag => dispatch(action.deleteTabList(flag))
    })
)
@language
class Header extends React.Component {
    // eslint-disable-next-line react/no-unused-prop-types
    static propTypes = { intl: intlShape.isRequired };

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: 'none'
        };
    }


    componentDidMount() {
    }

    // changeLang = val => {
    //     localStorage.setItem('lang', val);
    //     window.location.reload(true);
    // }

    @autobind
    logout() {
        const _this = this;
        const self = Modal.confirm({
            centered: true,
            title: _this.props.intl.formatMessage({ id: 'sureLoginOut' }),
            async onOk() {
                self.destroy();
                /* await dataAjax({
                    url: '/logout',
                    loading: true,
                    method: 'post'
                }); */
                localStorage.getItem('adminFlag') === 'false' ? _this.props.routers.push('/admin/login') : _this.props.routers.push('/login');
                delCookie('token');
                localStorage.removeItem('lang');
                localStorage.removeItem('userName');
                Message.success(_this.props.intl.formatMessage({ id: 'loginOutSuccess' }));
            }
        });
    }

    @autobind
    handleMouseOver() {
        this.setState({
            modalIsOpen: 'block'
        });
    }

    @autobind
    handleMouseOut() {
        this.setState({
            modalIsOpen: 'none'
        });
    }

    // 跳转系统设置
    @autobind
    sysClick() {
        this.props.routers.push('/systemManage/systemSetting');
    }

    render() {
        const _this = this;
        // const userData = _this.props.menuList || {};
        return (
            <div className="header">
                <div className="userinfo">
                    {/* <div style={{ display: 'inline-block', position: 'relative', marginRight: '10px', width: '120px', color: '#666' }}>
                        <span className="txt"><Icon type="heart" />切换语言</span>
                        <Select
                            onChange={_this.changeLang}
                            // defaultValue={theme}
                            style={{ width: '100%' }}
                            className="themeBg"
                        >
                            {
                                language.map(v => (
                                    <Select.Option value={v.value} key={v.value}>{v.name}</Select.Option>
                                ))
                            }
                        </Select>
                    </div> */}
                    <div style={{ display: 'inline-block', cursor: 'pointer' }}>
                        <div
                            className="headerContent"
                        >
                            <span className="headerImg" />
                            {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                            <div
                                style={{ display: 'inline-block' }}
                                onMouseOver={this.handleMouseOver}
                                onMouseLeave={this.handleMouseOut}
                            >
                                <span style={{ margin: '0px' }}>{localStorage.getItem('userName')}</span>
                                <div style={{ display: this.state.modalIsOpen }}>
                                    <ul className="headerAvatar" style={!getBtnAuth('sys_set_edit') ? { height: '80px' } : { height: '40px' }}>
                                        <AuthBtn type="sys_set_edit"><li onClick={_this.sysClick}><FormattedMessage id="sysTemSet" defaultMessage="系统设置" /></li></AuthBtn>
                                        <li onClick={_this.logout}><FormattedMessage id="loginOut" defaultMessage="退出" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { Header };
