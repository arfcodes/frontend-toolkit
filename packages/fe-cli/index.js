#!/usr/bin/env node

'use strict';

var nodeVersion = process.versions.node;
var semver = nodeVersion.split('.');
var majorVersion = semver[0];

if (majorVersion < 16) {
  console.error(
    'You are running Node ' +
    nodeVersion +
      '.\n' +
      'Create Web Project requires Node 16 or higher. \n' +
      'Please update your version of Node.'
  );
  process.exit(1);
}

const { init } = require('./scripts/main');

init();
