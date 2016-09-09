import React, {Component} from 'react';
import {Link} from 'react-router';
class SurveyList extends Component {
    render() {
        return (
            <div className="survey-manage-list">
                <div>
                    <Link to={"/ucenter/surveyManage/surveyEdit/create"} className="add">添加</Link>
                    <input type="text" placeholder="输入标题搜索"/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>标题</th>
                            <th>类别</th>
                            <th>状态</th>

                            <th>参与人数</th>
                            <th>访问量</th>
                            <th>创建时间</th>
                            <th>编辑时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ff2342342342342342351235345</td>
                            <td>分类1</td>
                            <td>
                                <select defaultValue="0">
                                    <option value="1">发布</option>
                                    <option value="0">未发布</option>
                                </select>
                            </td>

                            <td>0</td>
                            <td>999</td>
                            <td>2016-08-10</td>
                            <td>2016-10-11</td>
                            <td><Link to={"/ucenter/surveyManage/surveyEdit/edit/1"}>编辑</Link><a>统计分析</a><Link to={"/detail/1/true"}>预览</Link><a className="clearData">清空统计</a><a className="delData">删除</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SurveyList;