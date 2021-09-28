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

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('@lcdp/offline-plugin/runtime').install(); // eslint-disable-line global-require
}
