import React, {Component} from 'react';
import TopHeader from '../components/topHeader';
class Main extends Component {
    render() {
        return (
            <div>
                <TopHeader/>
                {this.props.children}
            </div>
        );
    }
}

export default Main;