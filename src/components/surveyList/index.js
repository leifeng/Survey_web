import React, {Component} from 'react';
import Info from '../info';
import {Link} from 'react-router';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './index.less';
class SurveyList extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(page) {
        const {onPageCb} = this.props;
        onPageCb(page);
    }
    render() {
        const {data, total, current} = this.props;
        return (
            <div className="survey-list">
                {data.list.map((item, index) => {
                    return (
                        <div className="item">
                            <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                            <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>
                            <div className="desc">
                                下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                            </div>
                        </div>
                    )
                }) }

                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="item">
                    <h3><Link to="/detail">标题标题标题标题标题标题标题</Link></h3>
                    <Info category={"分类1"} author={"张先森"} categoryId={1} authorId={2} num={987}/>

                    <div className="desc">
                        下面您会看到关于植物蛋白饮品的介绍。请注意这只是产品介绍不是广告。也和现在市场上正在销售的任何植物蛋白饮品无关。在您仔细阅读后，会有一些关于这个产品介绍的问题，请认真回答。谢谢。
                    </div>
                </div>
                <div className="page">
                    <Pagination total={total} current={current} onChange={this.onChange}/>
                </div>
            </div>
        );
    }
}
SurveyList.propType = {
    data: React.PropTypes.object,
    current: React.PropTypes.number,
    total: React.PropTypes.number,
    onPageCb: React.PropTypes.func
}
SurveyList.defaultProps = {
    data: { list: [] }
}
export default SurveyList;