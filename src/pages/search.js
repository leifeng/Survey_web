import React, {Component} from 'react';
import SearchBar from '../components/searchBar';
import HotKeyWords from '../components/hotKeyWords';
import SurveyList from '../components/surveyList'
class Search extends Component {
    constructor() {
        super();
        this.state = {
            data: { list: [] },
            total: 100,
            current: 1
        }
        this.type = '';
        this.onPageChange = this.onPageChange.bind(this);
    }
    render() {
        const {data, total, current} = this.state;
        return (
            <div className="container">
                <div className="w750">
                    <SearchBar/>
                    <HotKeyWords/>
                </div>
                <div className="mt40">
                    <SurveyList data={data} total={total} current={current} onPageCb={this.onPageChange}/>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getParam(() => {
            this.getData(1);
        });
    }
    componentDidUpdate(prevProps, prevState) {
        this.getParam(() => {
            this.getData(1);
        });
    }
    onPageChange(page) {
        this.setState({
            current: page
        }, () => {
            this.getData(page);
        });
    }
    getParam(cb) {
        const key = this.props.params.key;
        const author = this.props.params.author;
        const category = this.props.params.category;
        if (key) {
            console.log(key);
            this.type = 'key'
        } else if (author) {
            console.log(author);
            this.type = 'author'
        } else if (category) {
            console.log(category);
            this.type = 'category'
        } else {
            console.log('other');
            this.type = 'other'
        }
        cb && cb();
    }
    getData(page) {
        console.log('getData', this.type)
    }

}

export default Search;