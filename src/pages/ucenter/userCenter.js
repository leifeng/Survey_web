import React, {Component} from 'react';
import {Link} from 'react-router';
class UserCenter extends Component {
    render() {
        return (
            <div className="user-center">
                <div className="user-center-header">
                    <span className="title">用户中心</span>
                    <div className="user-center-menu">
                        <Link to="/ucenter/surveyManageList" activeClassName="active">问卷管理</Link>
                        <Link to="/ucenter/info" activeClassName="active">个人资料</Link>
                    </div>
                    <span className="username">欢迎您, admin<a>退出</a></span>
                </div>
                <div className="user-center-body">
                    <div className="padding">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCenter;