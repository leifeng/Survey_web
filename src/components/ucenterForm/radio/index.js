import React, {Component} from 'react';
import './index.less'
export default class Radio extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
        this.onChangeOptionValue = this.onChangeOptionValue.bind(this);
        this.onDeleteOption = this.onDeleteOption.bind(this);
    }
    onChange(e) {
        const {onChangeCb, index} = this.props;
        onChangeCb(index, e.target.value);
    }
    onClick() {
        const {onClickCB, index} = this.props;
        onClickCB(index);
    }
    onAddOption() {
        const {onAddOptionCB, index} = this.props;
        onAddOptionCB(index);
    }
    onChangeOptionValue(e) {
        const {onChangeOptionValueCB, index} = this.props;
        const target = e.target;
        const optIndex = target.getAttribute('data-index');
        onChangeOptionValueCB(index, optIndex, target.value);
    }
    onDeleteOption(e) {
        const target = e.target;
        if (target.nodeName === 'I' && target.className.indexOf('del-opt') !== -1) {
            const optIndex = target.getAttribute('data-index');
            const {onDeleteOptionCB, index} = this.props;
            onDeleteOptionCB(index, optIndex);
        }
    }
    render() {
        console.log('radio', this.props)
        const {item, index} = this.props;
        const title = item.get('title');
        const list = item.get('list');
        return (
            <div className="question-item question-item-radio">
                <div className="title">
                    <a className="question-del"  onClick={this.onClick}><i className="fa fa-trash-o fa-lg fa-fw" aria-hidden="true"></i></a>
                    <span>[单选题]</span>
                    <input type="text" placeholder="输入标题" value={title} onChange={this.onChange}/>
                </div>
                <ul className="fa-ul" onChange={this.onChangeOptionValue} onClick={this.onDeleteOption}>
                    {list.map((item, index) => {
                        return <li key={index}>
                            <i className="fa-li fa fa-dot-circle-o" aria-hidden="true"></i>
                            <input type="text" value={item.value} data-index={index} placeholder="选项值"/>
                            <a className="question-del">
                                <i className="fa fa-trash-o fa-fw del-opt" aria-hidden="true"  data-index={index}></i>
                            </a>
                        </li>
                    }) }
                    <li><a className="add-option" onClick={this.onAddOption}>添加<i className="fa fa-plus-square-o fa-fw" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !this.props.item.equals(nextProps.item)
    }
}