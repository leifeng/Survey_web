import React, {Component} from 'react';
import './index.less'
class TopHeader extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="container">
                    <div className="logo">问卷调查</div>
                    <div className="top-header-menu">
                        <a>首页</a>
                        <a>热门问卷</a>
                        <a>菜单1</a>
                    </div>
                    <div className="top-header-inout">
                        <a>登录</a>
                        <a>注册</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopHeader;