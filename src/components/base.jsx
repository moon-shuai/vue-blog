// 国际化注入方法
import { injectIntl } from 'react-intl';

const { Table, InitState } = require('decorator-react');
const { pageOption } = require('@util');

const Base = Table(pageOption());

function language(target) {
    return injectIntl(target);
}

export {
    Base,
    InitState,
    language
};
