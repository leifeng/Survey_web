import React, {Component} from 'react';
import './index.less';
class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar mt20">
                <input type="text" placeholder="搜索相关的问卷关键字"/>
                <a>搜索</a>
            </div>
        );
    }
}

export default SearchBar;