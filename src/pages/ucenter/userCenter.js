import React, {Component} from 'react';
import {Link} from 'react-router';
class UserCenter extends Component {
    onClick(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="user-center">
                <div className="user-center-header">
                    <span className="title">用户中心</span>
                    <div className="user-center-menu">
                        <Link to="/ucenter/surveyManage" activeClassName="active">问卷管理</Link>
                        <Link to="/ucenter/info" activeClassName="active">个人资料</Link>
                    </div>
                    <span className="username">欢迎您, admin<a>退出</a></span>
                </div>
                <div className="user-center-subMenu" >
                    当前位置：
                    {this.props.routes.map((item, index) => {
                        return <span key={index}><a>{item.rname}</a>{index===this.props.routes.length-1?'':<a className="arrow">></a>}</span>
                    }) }

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