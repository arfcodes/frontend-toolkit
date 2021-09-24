// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Test from '@/Test';

// Import styles
// import './styles/styles.scss';

const App = () => (
  <div>
    <Test />
  </div>
);

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));
