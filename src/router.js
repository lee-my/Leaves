import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MainPage from './routes/MainPage';
import H5Page from './routes/H5Page';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={MainPage}/>
        <Route path="/home" component={MainPage}/>
        <Route path="/h5" component={H5Page}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
