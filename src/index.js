import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { createHistory } from 'history';

require('normalize.css');

const history = createHistory();

render(
  <Root history={history} />,
  document.getElementById('root')
);
