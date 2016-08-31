import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Main from './pages/main';
import Index from './pages/index';
import Detail from './pages/detail'
class Page1 extends Component {
    render() {
        return <div>Page1</div>
    }
}
class Page2 extends Component {
    render() {
        return <div>Page2</div>
    }
}
class NoMatch extends Component {
    render() {
        return <h1>404</h1>
    }
}
const App = () => {
    return (
        <Router history={browserHistory}>
            <Route  path="/" component={Main}>
                <IndexRoute component={Index}/>
                <Route path="detail" component={Detail}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Router>
    )
}
export default App;