import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Main from './pages/main';
const Index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/index').default);
    })
};
const Detail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/detail').default);
    })
};
const Search = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/search').default);
    })
};
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
                <IndexRoute getComponent={Index}/>
                <Route path="detail" getComponent={Detail}/>
                <Route path="search" getComponent={Search}>
                    <Route path="key(/:key)" getComponent={Search}/>
                    <Route path="author(/:author)" getComponent={Search}/>
                    <Route path="category(/:category)" getComponent={Search}/>
                </Route>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Router>
    )
}
export default App;