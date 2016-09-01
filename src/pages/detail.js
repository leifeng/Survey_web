import React, {Component} from 'react';
import {createForm} from'rc-form';
import {Radio, CheckBox, QA} from '../components/form';

const data = [
    {
        id: 1, type: 'radio', title: 'xxxxxxxx?', list: [
            { id: 1, title: '选项1', value: 1 },
            { id: 2, title: '选项2', value: 2 },
            { id: 3, title: '选项3', value: 3 },
            { id: 4, title: '选项4', value: 4 }
        ]
    },
    {
        id: 2, type: 'radio', title: 'bbbbbbbbb?', list: [
            { id: 1, title: '选项1', value: 1 },
            { id: 2, title: '选项2', value: 2 },
            { id: 3, title: '选项3', value: 3 },
            { id: 4, title: '选项4', value: 4 }
        ]
    },
    {
        id: 3, type: 'checkbox', title: 'rrrr?', list: [
            { id: 1, title: '选项1', value: 1 },
            { id: 2, title: '选项2', value: 2 },
            { id: 3, title: '选项3', value: 3 },
            { id: 4, title: '选项4', value: 4 }
        ]
    },
    {
        id: 4, type: 'QA', title: 'adfasdfs()asdfsdf?'
    }
]




class Detail extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    render() {
        const { form} = this.props;
        return (
            <div className="container">
                <div className="questions">
                    <h1 className="title">大标题123123123</h1>
                    <div className="desc">分类: <a>分类1</a> | 作者：<a>李先森</a> | 参与人数：<span>8888</span></div>
                    <form onSubmit={this.onSubmit} className="q-list">
                        {data.map((item, index) => {
                            switch (item.type) {
                                case 'radio':
                                    return <Radio key={index} form={form} i={index + 1} {...item} />
                                case 'checkbox':
                                    return <CheckBox key={index} form={form} i={index + 1} {...item} />
                                case 'QA':
                                    return <QA key={index} form={form} i={index + 1} {...item} />
                                default:
                                    return null;
                            }
                        }) }
                        <div className="foot">
                            <button className="submit">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default createForm()(Detail);
