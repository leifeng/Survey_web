import React, {Component} from 'react';
import Immutable from 'immutable';
import {Radio, CheckBox} from '../../components/ucenterForm';
class SurveyEdit extends Component {
    constructor() {
        super();
        this.state = {
            qs: Immutable.List(),
            setting: Immutable.Map({ title: '', desc: '', categoryId: 0, ipFilter: false, status: 0 }),
            qsDispaly: false
        }
        this.onClickOption = this.onClickOption.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAddOption = this.onAddOption.bind(this);
        this.onChangeOptionValue = this.onChangeOptionValue.bind(this);
        this.onDeleteOption = this.onDeleteOption.bind(this);
        this.onChangeSetting = this.onChangeSetting.bind(this);
        this.onSaveSurvey=this.onSaveSurvey.bind(this);
    }
    //选择添加题按钮
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
    //修改题标题
    onChangeTitle(index, title) {
        const newState = this.state.qs.update(index, (value) => {
            return value.set('title', title);
        });
        this.setState({
            qs: newState
        })
    }
    //删除题
    onDelete(index) {
        const newState = this.state.qs.delete(index);
        this.setState({
            qs: newState
        })
    }
    //添加题选项
    onAddOption(index) {
        const newState = this.state.qs.update(index, (value) => {
            //{title:'',type:'',list:List}
            return value.update('list', (item) => {
                return item.push(Immutable.Map({ value: '' }));
            })
        })
        this.setState({
            qs: newState
        });
    }
    //修改题选项值
    onChangeOptionValue(index, optIndex, value) {
        const newState = this.state.qs.update(index, (item) => {
            //{title:'',type:'',list:List}
            return item.update('list', (item) => {
                //[{},{}]
                return item.update(optIndex, (item) => {
                    //{}
                    return item.set('value', value)
                })
            })
        })
        this.setState({
            qs: newState
        });
        console.log(index, value)
    }
    //删除题选项
    onDeleteOption(index, optIndex) {
        const newState = this.state.qs.update(index, (item) => {
            return item.update('list', (item) => {
                return item.delete(optIndex)
            })
        });
        this.setState({
            qs: newState
        })
    }
    //修改设置
    onChangeSetting(e) {
        const target = e.target;
        const name = target.getAttribute('data-name');
        let newState = null;
        if (name === 'ipFilter') {
            newState = this.state.setting.update(name, (value) => {
                return !value;
            })
        } else {
            newState = this.state.setting.set(name, target.value)
        }
        this.setState({
            setting: newState
        })
    }
    onSaveSurvey() {
        setTimeout(() => {
            console.log('保存问卷')
            this.setState({
                qsDispaly: true
            })
        }, 2000)
    }
    render() {
        const {setting,qsDispaly} = this.state;
        return (
            <div className="survey-edit">
                <div className="question-setting" style={{width:qsDispaly?'300px':'100%',float:qsDispaly?'left':'none'}}>
                    <div className="question-setting-title">问卷设置</div>
                    <ul onChange={this.onChangeSetting}>
                        <li><span>问卷标题：</span><input type="text" value={setting.get('title') } data-name="title"/></li>
                        <li><span>问卷描述：</span><textarea value={setting.get('desc') } data-name="desc"/></li>
                        <li><span>问卷分类：</span><select defaultValue={setting.get('categoryId') }  data-name="categoryId">
                            <option value="0">分类0</option>
                            <option value="1">分类1</option>
                            <option value="2">分类2</option>
                            <option value="3">分类3</option>
                        </select>
                        </li>
                        <li><label>单ip答题一次: <input type="checkbox" checked={setting.get('ipFilter') ? true : false }   data-name="ipFilter"/></label></li>
                        <li><a onClick={this.onSaveSurvey}>{qsDispaly?'保存':'开始创建题目'}</a></li>
                    </ul>
                </div>
                <div className="question-create" style={{display:qsDispaly?'block':'none'}}>
                    <div  className="question-option" onClick={this.onClickOption}>
                        <a data-type="radio">单选题</a>
                        <a data-type="checkbox">多选题</a>
                        <a data-type="QA">问答题</a>
                    </div>
                    <div className="question-list">
                        {this.state.qs.toJS().map((item, index) => {
                            switch (item.type) {
                                case 'radio':
                                    return <Radio  key={index} index={index} {...item} onChangeCb={this.onChangeTitle} onClickCB={this.onDelete} onAddOptionCB={this.onAddOption}  onChangeOptionValueCB={this.onChangeOptionValue} onDeleteOptionCB={this.onDeleteOption}/>
                                case 'checkbox':
                                    return <CheckBox  key={index} index={index} {...item} onChangeCb={this.onChangeTitle} onClickCB={this.onDelete} onAddOptionCB={this.onAddOption}  onChangeOptionValueCB={this.onChangeOptionValue} onDeleteOptionCB={this.onDeleteOption}/>
                            }
                        }) }
                        {this.state.qs.size > 0 ?
                            <div  className="question-save">
                                <a>保存</a>
                            </div> : <div className="question-blank">空问卷<br/>点击左侧按钮添加问卷题目</div>}
                    </div>
                </div>


            </div>
        );
    }
}

export default SurveyEdit;