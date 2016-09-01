import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.less';
class Info extends Component {
    render() {
        const {category, author, categoryId, authorId, num} = this.props;
        return (
            <div className="other-info">
                分类：<Link to={"/search/category/" + categoryId}>{category}</Link>&nbsp; &nbsp; |&nbsp; &nbsp; 作者：<Link to={"/search/author/" + authorId}>{author}</Link>&nbsp; &nbsp; |&nbsp; &nbsp; 参与人数：<span>{num}</span>
            </div>
        );
    }
}
Info.propTypes = {
    category: React.PropTypes.string,
    author: React.PropTypes.string,
    categoryId: React.PropTypes.number,
    authorId: React.PropTypes.number,
    num: React.PropTypes.number
}
export default Info;