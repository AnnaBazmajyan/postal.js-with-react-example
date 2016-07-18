'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/index.jsx';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route name="app" path="app" component={App}/>
  </Route>
);

module.exports = routes;
