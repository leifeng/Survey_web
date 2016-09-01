import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.less';
class HotKeyWords extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="hot-keyWords">
                热搜词：{data.map((item, index) => {
                    return <Link to={'/search/key/'+item} key={index}>{item}</Link>
                }) }
            </div>
        );
    }
}
HotKeyWords.propTypes = {
    data: React.PropTypes.array
}
HotKeyWords.defaultProps = {
    data: ['别浪', '猥琐发育', '回防高地']
}
export default HotKeyWords;