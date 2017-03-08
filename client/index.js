import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import Work from './pages/Work/Work';
import Projects from './pages/Projects/Projects';
import Articles from './pages/Articles/Articles';
import About from './pages/About/About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/work" component={Work} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Articles" component={Articles} />
      <Route path="/About" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
