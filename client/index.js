import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import About from './components/About/About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/work" component={Work} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Articles" component={Articles} />
      <Route path="/About" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
