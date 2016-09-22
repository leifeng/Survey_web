import React, {Component} from 'react';
import './index.less';

export default class Box extends Component {
    render() {
        const {title, children} = this.props;
        return (
            <div className="box">
                <div className="title">{title}</div>
                <div className="body">
                    {children}
                </div>
            </div>
        )
    }
}