import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app';
import Time from './components/time';

const Routes = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/:timestring' component={Time} />
    </div>
  </BrowserRouter>
);

export default Routes;