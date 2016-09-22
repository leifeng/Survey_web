import React, {Component} from 'react';
import echarts  from 'echarts';
const arr = [1, 2, 3, 4]
class SurveyStatistics extends Component {
    render() {
        return (
            <div>
                <div className="statistics-list">
                    {arr.map((item, index) => {
                        return <div className="statistics-item" key={index}>
                            <div className="title">第一题：xxxxxx？（单选题）</div>
                            <div className="body">
                                <div id={'chart_' + item} className="chart"></div>
                            </div>
                        </div>
                    }) }
                </div>
            </div>
        );
    }
    componentDidMount() {
        for (let value of arr) {
            const myChart = echarts.init(document.getElementById('chart_' + value));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '90%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option)
        }


    }
}

export default SurveyStatistics;