// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './includes/App';

// Import framework styles
import '../../scss/src/_all.scss';
// Import demo styles
import '../../static/demo/styles/_demo.scss';

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));
