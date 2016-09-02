import React, {Component} from 'react';
import SearchBar from '../components/searchBar';
import HotKeyWords from '../components/hotKeyWords';
import LeftSidebar from '../components/leftSidebar';
import SurveyList from '../components/surveyList';
class Index extends Component {
    constructor() {
        super();
        this.state = {
            data: { list: [] },
            total: 100,
            current: 1
        }
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
                    <div className="fl w150">
                        <LeftSidebar title="功能分类" getIdfn={this.getSurveyDatafn}/>
                    </div>
                    <div className="fr w805">
                        <SurveyList data={data} total={total} current={current} onPageCb={this.onPageChange}/>
                    </div>
                </div>
            </div>
        );
    }
    onPageChange(page) {
        this.setState({
            current: page
        }, () => {
            this.getData(page);
        });
    }
    getData(page) {
        console.log('getData')
    }
    getSurveyDatafn(id) {

    }
}

export default Index;