import React, {Component} from 'react';
import {Link} from 'react-router'
import Popup from '../popup';
import Login from '../login';
import Reg from '../reg';
import './index.less'
class TopHeader extends Component {
    constructor() {
        super();
        this.state = {
            display: 'none',
            title: '',
            renderView: 'login'
        }
        this.onClick = this.onClick.bind(this);
        this.onCloseCb = this.onCloseCb.bind(this);
        this.renderView = this.renderView.bind(this);
        this.onChangeView = this.onChangeView.bind(this);
    }
    render() {
        const {display} = this.state;
        return (
            <div>
                <Popup title={this.state.title} display={display} onCloseCb={this.onCloseCb}>
                    {this.renderView() }
                </Popup>
                <div className="top-header">
                    <div className="container">
                        <div className="logo">问卷调查</div>
                        <div className="top-header-menu">
                            <Link to="/">首页</Link>
                            <Link to="/search">热门调查</Link>
                        </div>
                        <div className="top-header-inout" onClick={this.onClick}>
                            <a className="login-btn">登录</a>
                            <a className="reg-btn">注册</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderView() {
        if (this.state.renderView === 'login') {
            return <Login renderCb={this.onChangeView}/>
        } else {
            return <Reg renderCb={this.onChangeView}/>
        }
    }
    onChangeView(view) {
        if (view === 'reg') {
            this.state.title = "用户注册";
        } else {
            this.state.title = "用户登录";
        }
        this.state.renderView = view;
        this.forceUpdate();
    }
    onClick(e) {
        const target = e.target;
        let title = '';
        if (target.className === "login-btn") {
            title = '用户登录';
            this.state.renderView = "login";
        } else if (target.className === "reg-btn") {
            title = '用户注册';
            this.state.renderView = "reg";

        } else {
            return
        }
        this.setState({
            display: 'block',
            title: title
        })
    }
    onCloseCb() {
        this.setState({
            display: 'none'
        })
    }

}

export default TopHeader;