import React, {Component} from 'react';
import Immutable from 'immutable';
class Radio extends Component {
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
        const {title, list, index} = this.props;
        return (
            <div className="question-item">
                <div className="title">
                    <a className="question-del" alt="删除" onClick={this.onClick}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></a>
                    <span>[单选题]{index}</span>
                    <input type="text" placeholder="输入标题" value={title} onChange={this.onChange}/>
                </div>
                <ul className="fa-ul">
                    <li><i className="fa-li fa fa-dot-circle-o" aria-hidden="true"></i><input type/></li>
                    <li><a className="add-option">添加<i className="fa fa-plus-square-o fa-fw" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        )
    }
}
class SurveyEdit extends Component {
    constructor() {
        super();
        this.state = {
            qs: Immutable.List()
        }
        this.onClickOption = this.onClickOption.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onClickOption(e) {
        const target = e.target;
        if (target.nodeName === 'A') {
            const attr = target.getAttribute('data-type');
            const qsMap = Immutable.Map({ type: attr, title: '', list: Immutable.List() })
            const newState = this.state.qs.push(qsMap)
            this.setState({
                qs: newState
            })
        }
    }
    onChangeTitle(index, title) {
        const newState = this.state.qs.update(index, (value) => {
            return value.set('title', title);
        });
        this.setState({
            qs: newState
        })
    }
    onDelete(index) {
        const newState = this.state.qs.delete(index);
        this.setState({
            qs: newState
        })
    }
    render() {
        console.log(this.state.qs.toJS())
        return (
            <div className="survey-edit">
                <div className="question-option" onClick={this.onClickOption}>
                    <a data-type="radio">单选题</a>
                    <a data-type="checkbox">多选题</a>
                    <a data-type="QA">问答题</a>
                </div>
                <div className="question-list">
                    {this.state.qs.toJS().map((item, index) => {
                        switch (item.type) {
                            case 'radio':
                                return <Radio  key={index} index={index} {...item} onChangeCb={this.onChangeTitle} onClickCB={this.onDelete} />
                            case 'checkbox':
                                return ''
                        }
                    }) }
                </div>
            </div>
        );
    }
}

export default SurveyEdit;