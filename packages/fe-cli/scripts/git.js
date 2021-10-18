'use strict';

var got = require('got');
var tar = require('tar');
var { Stream } = require('stream');
var { promisify } = require('util');

var pipeline = promisify(Stream.pipeline);

/**
 * Download and extract sass components
 */
function downloadAndExtractSass(rootPath) {
  const repoDir = 'components/scss';
  return downloadAndExtract(rootPath, 'frontend-toolkit', repoDir);
}

/**
 * Download and extract components
 */
function downloadAndExtractComponents(rootPath, name) {
  let repoDir = `components/${name}`;
  if (name === 'nextjs') {
    repoDir = 'components/react';
  }
  return downloadAndExtract(rootPath, 'frontend-toolkit', repoDir);
}

/**
 * Download and extract React
 */
function downloadAndExtractReact(rootPath, template) {
  const repoDir = `templates/${template}`;
  return downloadAndExtract(rootPath, 'react-starter', repoDir);
}

/**
 * Download and extract gruntjs
 */
function downloadAndExtractGruntJs(rootPath, template) {
  const repoDir = `templates/${template}`;
  return downloadAndExtract(rootPath, 'gruntjs-starter', repoDir);
}

/**
 * Download and extract nextjs
 */
function downloadAndExtractNextJs(rootPath, template) {
  const repoDir = `templates/${template}`;
  return downloadAndExtract(rootPath, 'nextjs-starter', repoDir);
}

/**
 * Download and extract solidjs
 */
function downloadAndExtractSolidJs(rootPath, template) {
  const repoDir = `templates/${template}`;
  return downloadAndExtract(rootPath, 'solidjs-starter', repoDir);
}

/**
 * Download and extract vue
 */
function downloadAndExtractVue(rootPath, template) {
  const repoDir = `templates/${template}`;
  return downloadAndExtract(rootPath, 'vue-starter', repoDir);
}

/**
 * Download and extract git files
 */
function downloadAndExtract(rootPath, packageName, repoDir = false, repoBranch = 'main') {
  const repoUrl = `https://codeload.github.com/arfcodes/${packageName}/tar.gz/${repoBranch}`;
  return pipeline(
    got.stream(repoUrl),
    tar.extract(
      { cwd: rootPath, strip: repoDir ? repoDir.split('/').length + 1 : 1 },
      [`${packageName}-${repoBranch}${repoDir ? `/${repoDir}` : ''}`]
    )
  );
}

/**
 * Download and extract git files
 */
function downloadAndExtractStarter(rootPath, type, template) {
  if (type === 'react') {
    return downloadAndExtractReact(rootPath, template);
  } else if (type === 'nextjs') {
    return downloadAndExtractNextJs(rootPath, template);
  } else if (type === 'solid') {
    return downloadAndExtractSolidJs(rootPath, template);
  } else if (type === 'grunt') {
    return downloadAndExtractGruntJs(rootPath, template);
  } else if (type === 'vue') {
    return downloadAndExtractVue(rootPath, template);
  }
  return false;
}

module.exports = {
  downloadAndExtractSass,
  downloadAndExtractComponents,
  downloadAndExtractReact,
  downloadAndExtractSolidJs,
  downloadAndExtractGruntJs,
  downloadAndExtractVue,
  downloadAndExtract,
  downloadAndExtractStarter,
};