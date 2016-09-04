import React, {Component} from 'react';
import './index.less'
class Reg extends Component {
    constructor() {
        super();
        this.state = {
            nameMessage: '',
            pwdMessage: '',
        }
        this.onClick = this.onClick.bind(this);
    }
    render() {
        return (
            <div className="reg">
                <label>用户名/邮箱：</label><input type="text" ref="username"/>
                <div className="message">{this.state.nameMessage}</div>
                <label>密码：</label><input type="password" ref="userpwd"/>
                <label>确认密码：</label><input type="password" ref="userpwd2"/>
                <div className="message">{this.state.pwdMessage}</div>
                <div className="btns" onClick={this.onClick}>
                    <a className="reg-btn">注册</a> <a className="has-account">已有账号?</a>
                </div>
            </div>
        );
    }
    onClick(e) {
        const target = e.target;
        if (target.className === "reg-btn") {

        } else if (target.className === "has-account") {
            const {renderCb} = this.props;
            renderCb('login');

        } else {
            return
        }
    }
    onReg() {

    }
}

export default Reg;