import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router';
import Main from './pages/main';
// import UserCenter from './pages/ucenter/userCenter';
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
const UserCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/ucenter/userCenter').default);
    })
};
const UserCenterIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/ucenter/index').default);
    })
};
const SurveyList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/ucenter/surveyList').default);
    })
};
const SurveyEdit = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/ucenter/surveyEdit').default);
    })
};
const SurveyStatistics = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./pages/ucenter/surveyStatistics').default);
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
                <Route path="detail/:id(/:preview)" getComponent={Detail}/>
                <Route path="search" getComponent={Search}>
                    <Route path="key(/:key)" getComponent={Search}/>
                    <Route path="author(/:author)" getComponent={Search}/>
                    <Route path="category(/:category)" getComponent={Search}/>
                </Route>
            </Route>
            <Route path="/ucenter" getComponent={UserCenter} rname="个人中心">
                <IndexRedirect to="/ucenter/index" />
                <Route path="index"  getComponent={UserCenterIndex} rname="信息概览"/>
                <Route path="surveyManage"  rname="问卷管理">
                    <IndexRedirect to="/ucenter/surveyManage/index" />
                    <Route path="index" getComponent={SurveyList} />
                    <Route path="surveyEdit(/:status)(/:id)" getComponent={SurveyEdit} rname="问卷(添加/编辑)"/>
                    <Route path="surveyStatistics/:id" getComponent={SurveyStatistics} rname="问卷统计"/>
                </Route>

            </Route>

            <Route path="*" component={NoMatch}/>
        </Router>
    )
}
export default App;