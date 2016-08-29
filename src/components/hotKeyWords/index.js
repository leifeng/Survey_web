import React, {Component} from 'react';
import './index.less';
class HotKeyWords extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="hot-keyWords">
                热搜词：{data.map((item, index) => {
                    return <a key={index}>{item}</a>
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