import React, {Component} from 'react';
import './index.less'
class QA extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e) {
        const {onChangeCb, index} = this.props;
        onChangeCb(index, e.target.value);
    }
    onClick() {
        const {onClickCB, index} = this.props;
        onClickCB(index);
    }
    render() {
        const {title, index} = this.props;
        return (
            <div className="question-item question-item-qa">
                <div className="title">
                    <a className="question-del"  onClick={this.onClick}><i className="fa fa-trash-o fa-lg fa-fw" aria-hidden="true"></i></a>
                    <span>[问答题]</span>
                    <input type="text" placeholder="输入标题" value={title} onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}

export default QA;