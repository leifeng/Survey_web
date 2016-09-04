import React, {Component} from 'react';
import TopHeader from '../components/topHeader';
import Footer from '../components/footer'
class Main extends Component {
    render() {
        return (
            <div className="main">
                <TopHeader/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Main;