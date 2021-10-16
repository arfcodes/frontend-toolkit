const fs = require('fs');
const ncp = require('ncp').ncp;
const retry = require('async-retry');
const chalk = require('chalk');
const git = require('./git.js');
const helpers = require('./helpers.js');

ncp.limit = 16;

/**
 * Install sass
 */
async function installSass(appPath, type) {
  let sassPath = '';
  if (type === 'grunt') {
    sassPath = `${appPath}/resources/scss/src`;
  } else {
    sassPath = `${appPath}/src/styles`;
  }
  // Check directory
  if (!fs.existsSync(sassPath)) {
    fs.mkdirSync(sassPath);
  } else {
    // Remove all files
    helpers.removeFiles(sassPath);
  }

  // Create temp directory
  const tempSassPath = `${appPath}/sass_temp`;
  console.log(tempSassPath);
  fs.mkdirSync(tempSassPath, { recursive: true });

  // Download all scss files
  try {
    await retry(() => git.downloadAndExtractSass(tempSassPath), {
      retries: 3,
    });

    // Copying all files
    ncp(`${tempSassPath}/src`, sassPath, function (err) {
      if (err) {
        console.log(chalk.red('Failed copy the SASS files.'));
        console.error(err);
        process.exit();
      }
    });
    console.log(chalk.green('Success install the SASS.'));

    // // Get package.json content
    var packageJsonFile = `${tempSassPath}/package.json`;
    var packageJsonContent = fs.readFileSync(packageJsonFile, 'utf8');
    var packageJsonData = JSON.parse(packageJsonContent);

    // // Remove temp directory
    fs.rmdirSync(tempSassPath, { recursive: true, force: true });

    return packageJsonData;

  } catch(error) {
    console.log(chalk.red('Download SASS files error.'));
    console.error(error);
    process.exit(1);
  }
}

/**
 * Install components
 */
async function installComponents(appPath, type) {
  const compPath = `${appPath}/src`;
  // Check directory
  if (!fs.existsSync(compPath)) {
    console.log(chalk.red('Cannot install the Components, because the directory is not exists.'));
    process.exit(1);
  }

  // Create temp directory
  const tempCompPath = `${compPath}/components_temp`;
  fs.mkdirSync(tempCompPath);

  // Download all components files
  try {
    await retry(() => git.downloadAndExtractComponents(tempCompPath, type), {
      retries: 3,
    });

    // Copying all files
    ncp(tempCompPath, compPath, function (err) {
      if (err) {
        console.log(chalk.red('Failed copy the components files.'));
        console.error(err);
        process.exit();
      }
      console.log(chalk.green('Success install the components.'));
    });

    // Get package.json content
    var packageJsonFile = `${tempCompPath}/package.json`;
    var packageJsonContent = fs.readFileSync(packageJsonFile, 'utf8');

    // Remove temp directory
    fs.rmdirSync(`${tempCompPath}/src`, { recursive: true, force: true });

    return packageJsonContent;

  } catch(error) {
    console.log(chalk.red('Download Components error.'));
    console.error(error);
    process.exit(1);
  }
}

/**
 * Install grunt components
 */
async function installGruntComponents(appPath) {
  const compPath = `${appPath}/resources`;
  // Check directory
  if (!fs.existsSync(compPath)) {
    console.log(chalk.red('Cannot install the Components, because the directory is not exists.'));
    process.exit(1);
  }

  // Create temp directory
  const tempCompPath = `${compPath}/components_temp`;
  fs.mkdirSync(tempCompPath);

  // Download all scss files
  try {
    await retry(() => git.downloadAndExtractComponents(tempCompPath, 'static'), {
      retries: 3,
    });

    // Copying all files
    ncp(tempCompPath, compPath, function (err) {
      if (err) {
        console.log(chalk.red('Failed copy the components files.'));
        console.error(err);
        process.exit();
      }
      console.log(chalk.green('Success install the components.'));
    });

    // Get package.json content
    var packageJsonFile = `${tempCompPath}/package.json`;
    var packageJsonContent = fs.readFileSync(packageJsonFile, 'utf8');

    // Remove temp directory
    fs.rmdirSync(tempCompPath, { recursive: true, force: true });

    return packageJsonContent;

  } catch(error) {
    console.log(chalk.red('Download Components error.'));
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  installSass,
  installComponents,
  installGruntComponents,
};