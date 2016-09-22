import React, {Component} from 'react';
import echarts  from 'echarts';
import Box from '../../components/box'
class Index extends Component {
    render() {
        return (
            <div className="index">

                <Box title="概览图">
                    <div className="chart_line" id="chart_line"></div>
                    <div>昨日参与人数：10 今日参与人数：50</div>
                </Box>
                <Box title="最近参与情况">
                    <table className="newList">
                        <thead>
                            <tr>
                                <th>题目名称</th>
                                <th>答题时长</th>
                                <th>ip地址</th>
                                <th>设备</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>xxxxx</td>
                                <td>2小时20分</td>
                                <td>203.222.40.23</td>
                                <td>移动端</td>
                            </tr>
                            <tr>
                                <td>一月又一月</td>
                                <td>1小时50分</td>
                                <td>203.222.40.23</td>
                                <td>pc端</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>

            </div>
        );
    }
    componentDidMount() {
        const myChart = echarts.init(document.getElementById('chart_line'));
        const option = {
            grid: {
                top: '5%',
                left: '0%',
                right: '1%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };

        myChart.setOption(option)
    }

}

export default Index;