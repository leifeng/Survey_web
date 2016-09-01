import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.less';
class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const {text} = this.state;
        return (
            <div className="search-bar mt20">
                <input type="text" placeholder="搜索相关的问卷关键字" value={text} onChange={this.onChange}/>
                <Link to={'/search/key/' + text}>搜索</Link>
            </div>
        );
    }
}
SearchBar.propType = {
    onSearchCb: React.PropTypes.func
}

export default SearchBar;