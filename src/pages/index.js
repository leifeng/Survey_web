import React, {Component} from 'react';
import SearchBar from '../components/searchBar';
import HotKeyWords from '../components/hotKeyWords';
import LeftSidebar from '../components/leftSidebar';
import SurveyList from '../components/surveyList'
class Index extends Component {
    render() {
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
                        <SurveyList/>
                    </div>
                </div>
            </div>
        );
    }
    getSurveyDatafn(id) {

    }
}

export default Index;