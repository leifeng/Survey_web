import React, {Component} from 'react';
import SearchBar from '../components/searchBar';
import HotKeyWords from '../components/hotKeyWords'
class Index extends Component {
    render() {
        return (
            <div className="container">
                <div className="w750">
                    <SearchBar/>
                    <HotKeyWords/>
                </div>

            </div>
        );
    }
}

export default Index;