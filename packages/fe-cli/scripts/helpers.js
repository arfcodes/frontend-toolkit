const fs = require('fs').promises;
const ncp = require('ncp').ncp;
const path = require('path');

ncp.limit = 16;

/**
 * Remove all files inside a directory
 */
async function removeFiles(directory) {
  await fs.readdir(directory, async (err, files) => {
    if (err) throw err;

    for (const file of files) {
      await fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
}

/**
 * Update package.json data
 */
function updatePackageJsonData(name, original, changes) {
  if (typeof changes[name] !== 'undefined') {
    if (typeof original[name] !== 'undefined') {
      let keys = [];
      const values = changes[name];
      for (let key in values) {
        if (values.hasOwnProperty(key)) keys.push(key);
      }
    
      for (let i = 0; i < keys.length; i++) { 
        const package = keys[i];
        const version = values[package];

        original[name][package] = version;
      }
    } else {
      original[name] = changes[name];
    }
  }
  return original;
}

/**
 * CopyDirectoryFiles
 */
function CopyDirectoryFiles(original, target, options = {}) {
  return new Promise((resolve, reject) => {
    ncp(original, target, options, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  removeFiles,
  updatePackageJsonData,
  CopyDirectoryFiles,
};