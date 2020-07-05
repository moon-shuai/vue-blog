import React from 'react';

function Empty(props) {
    const { children } = props;
    const t = typeof children === 'function' ? children() : children;
    return <div className="route-warp">{t}</div>;
}
export { Empty };
