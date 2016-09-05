import React, {Component} from 'react';

class SurveyManageList extends Component {
    render() {
        return (
            <div className="survey-manage-list">
                <div>
                <a className="add">添加</a>
                <input type="text" placeholder="输入标题搜索"/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>状态</th>
                            <th>参与人数</th>
                            <th>创建时间</th>
                            <th>编辑时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ff2342342342342342351235345</td>
                            <td>
                                <select>
                                    <option selected>发布</option>
                                    <option>未发布</option>
                                </select>
                            </td>
                            <td>0</td>
                            <td>2016-08-10</td>
                            <td>2016-10-11</td>
                            <td><a>编辑</a><a>统计分析</a><a>预览</a><a className="clearData">清空统计</a><a className="delData">删除</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SurveyManageList;