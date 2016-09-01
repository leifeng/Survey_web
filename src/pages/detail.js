import React, {Component} from 'react';
import {createForm} from'rc-form';
import {Radio, CheckBox, QA, FillBlank} from '../components/form';
import Info from '../components/info'
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
        id: 4, type: 'QA', title: 'adfasdfs@_@asdfsdf?'
    },
    {
        id: 5, type: 'QA', title: '长亭外，古道边，_?'
    },
    {
        id: 6, type: 'fb', title: '天上有多少星星?'
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
            if (!error) {
                console.log('ok', value);
            } else {
                console.log('error', error, value);
            }
        });
    }

    render() {
        const { form} = this.props;
        return (
            <div className="container">
                <div className="questions">
                    <h1 className="title">大标题123123123</h1>
                    <div className="info">
                        <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>
                    </div>
                    <form onSubmit={this.onSubmit} className="q-list">
                        {data.map((item, index) => {
                            switch (item.type) {
                                case 'radio':
                                    return <Radio key={index} form={form} i={index + 1} {...item} />
                                case 'checkbox':
                                    return <CheckBox key={index} form={form} i={index + 1} {...item} />
                                case 'QA':
                                    return <QA key={index} form={form} i={index + 1} {...item} />
                                case 'fb':
                                    return <FillBlank key={index} form={form} i={index + 1} {...item} />
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
