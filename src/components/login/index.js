import React, {Component} from 'react';
import Cookies from 'cookies-js';
import './index.less';
const COOKIES = Cookies(window);
class Login extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
        this.onLogin = this.onLogin.bind(this);
        this.renderReg=this.renderReg.bind(this);
    }
    render() {
        const {message} = this.state;
        return (
            <div className="login">
                <div>
                    <label>用户名/邮箱：</label><input type="text" ref="username"/>
                    <label>密码：</label><input type="password" ref="userpwd"/>
                    <div className="message">{message}</div>
                    <div className="btns">
                        <a className="login-btn" onClick={this.onLogin}>登录</a>
                        <a className="reg-btn" onClick={this.renderReg}>注册</a>
                    </div>
                </div>
            </div>
        );
    }
    onLogin() {
        const username = this.refs.username;
        const userpwd = this.refs.userpwd;
        fetch('/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                username: username,
                userpwd: userpwd
            }
        });
    }
    renderReg(){
        const {renderCb}=this.props;
        renderCb('reg');
    }
}

export default Login;