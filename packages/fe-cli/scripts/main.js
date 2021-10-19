'use strict';

const path = require('path');
const fs = require('fs').promises;
const fsExtra = require('fs-extra');
const ncp = require('ncp').ncp;
const retry = require('async-retry');
const commander = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const packageJson = require('../package.json');
const options = require('./options.js');
const git = require('./git.js');
const helpers = require('./helpers.js');

ncp.limit = 16;

function init() {
  var program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .action(() => {
      prompts();
    });

  program.parse(process.argv);
}

function prompts() {
  var firstQuestions = [
    {
      type: 'input', 
      name: 'appName', 
      message: 'Enter your application name.',
    },
    {
      type: 'list', 
      name: 'type', 
      message: 'Choose type of the framework/tools', 
      choices: options.type,
    },
  ];

  inquirer
    .prompt(firstQuestions)
    .then(function (answers1) {
      
      var type = answers1.type;
      var templates = [];
      if (typeof options[type] !== 'undefined') {
        templates = options[type];
      }

      var secondQuestions = [
        {
          type: 'list', 
          name: 'template', 
          message: 'Choose template', 
          choices: templates,
        },
        {
          type: 'confirm', 
          name: 'sass', 
          message: 'Want to download sass framework?',
        },
        {
          type: 'confirm', 
          name: 'components', 
          message: 'Want to download components?',
        },
      ];

      inquirer
        .prompt(secondQuestions)
        .then(async function (answers2) {

          // Get all answers
          var answers = { ...answers1, ...answers2 };
          var appName = answers.appName;
          var type = answers.type;
          var template = answers.template;
          var appPath = path.resolve(appName);

          // Check directory
          if (fsExtra.existsSync(appPath)) {
            console.log(chalk.red('Cannot install the stater, because the directory already exists.'));
            process.exit(1);
          }
          fsExtra.ensureDirSync(appName);

          console.log('Installing starter. This might take a couple of minutes.');

          // Download starter files
          console.log(
            `Downloading files for ${chalk.cyan(answers.type)} > ${chalk.cyan(answers.template)}. This might take a moment.`
          );
          try {
            await retry(() => git.downloadAndExtractStarter(appPath, type, template), {
              retries: 3,
            });
          } catch(error) {
            console.log('Download error.');
            console.error(error);
            process.exit(1);
          }

          // Get package.json content
          var packageJsonFile = `${appPath}/package.json`;
          var packageJsonContent = fsExtra.readFileSync(packageJsonFile, 'utf8');
          var packageJsonData = JSON.parse(packageJsonContent);

          // Update package.json content
          packageJsonData.name = appName;
          packageJsonData.version = '0.0.0';

          // Install SASS
          var isInstallSass = answers.sass;
          if (isInstallSass) {
            console.log('Try to install SASS components');

            let sassPath = '';
            if (type === 'grunt') {
              sassPath = `${appPath}/resources/scss/src`;
            } else if (type === 'nextjs') {
              sassPath = `${appPath}/styles`;
            } else {
              sassPath = `${appPath}/src/styles`;
            }
            // Check directory
            if (!fsExtra.existsSync(sassPath)) {
              fsExtra.mkdirSync(sassPath);
            } else {
              // Remove all files
              await helpers.removeFiles(sassPath);
            }

            // Create temp directory
            const tempSassPath = `${appPath}/sass_temp`;
            fsExtra.mkdirSync(tempSassPath, { recursive: true });

            // Download all scss files
            try {
              await retry(() => git.downloadAndExtractSass(tempSassPath), {
                retries: 3,
              });

              // Copying all files
              await helpers.CopyDirectoryFiles(`${tempSassPath}/src`, sassPath);

              console.log(chalk.green('Success install the SASS.'));

              // Get package.json content
              var sassPackageJsonFile = `${tempSassPath}/package.json`;
              var sassPackageJsonContent = fsExtra.readFileSync(sassPackageJsonFile, 'utf8');
              var sassPackageJsonData = JSON.parse(sassPackageJsonContent);
              packageJsonData = helpers.updatePackageJsonData('dependencies', packageJsonData, sassPackageJsonData);
              packageJsonData = helpers.updatePackageJsonData('devDependencies', packageJsonData, sassPackageJsonData);

              // Remove temp directory
              fsExtra.rmSync(tempSassPath, { recursive: true, force: true });

            } catch(error) {
              console.log(chalk.red('Download SASS files error.'));
              console.error(error);
              process.exit(1);
            }
          }

          // Install components
          var isInstallComp = answers.components;
          if (isInstallComp) {
            console.log(`Try to install ${chalk.cyan(answers.type)} components`);

            let compPath = '';
            let compUrl = type;
            if (type === 'grunt') {
              compPath = `${appPath}/resources`;
              compUrl = 'static';
            } else if (type === 'nextjs') {
              compPath = appPath;
              compUrl = 'react';
            } else {
              compPath = `${appPath}/src`;
            }

            // Check directory
            if (!fsExtra.existsSync(compPath)) {
              console.log(chalk.red('Cannot install the Components, because the directory is not exists.'));
              process.exit(1);
            }

            // Create temp directory
            const tempCompPath = `${appPath}/components_temp`;
            fsExtra.mkdirSync(tempCompPath);

            // Download all components files
            try {
              await retry(
                () => git.downloadAndExtractComponents(
                  tempCompPath, 
                  compUrl
                ), 
                {
                  retries: 3,
                }
              );

              // Copying all files
              await helpers.CopyDirectoryFiles(`${tempCompPath}/src`, compPath);

              console.log(chalk.green('Success install the components.'));

              // Get package.json content
              var compPackageJsonFile = `${tempCompPath}/package.json`;
              var compPackageJsonContent = fsExtra.readFileSync(compPackageJsonFile, 'utf8');
              var compPackageJsonData = JSON.parse(compPackageJsonContent);
              packageJsonData = helpers.updatePackageJsonData('dependencies', packageJsonData, compPackageJsonData);
              packageJsonData = helpers.updatePackageJsonData('devDependencies', packageJsonData, compPackageJsonData);

              // Remove temp directory
              fsExtra.rmSync(tempCompPath, { recursive: true, force: true });

              // Get next js components
              if (type === 'nextjs') {
                // Create temp directory
                const tempNextCompPath = `${appPath}/next_components_temp`;
                fsExtra.mkdirSync(tempNextCompPath);

                // Download all components files
                try {
                  await retry(
                    () => git.downloadAndExtractComponents(
                      tempNextCompPath, 
                      'nextjs'
                    ), 
                    {
                      retries: 3,
                    }
                  );

                  // Copying all files
                  await helpers.CopyDirectoryFiles(`${tempNextCompPath}/src`, compPath);

                  console.log(chalk.green('Success add nextjs components.'));

                  // Get package.json content
                  var nextPackageJsonFile = `${tempNextCompPath}/package.json`;
                  var nextPackageJsonContent = fsExtra.readFileSync(nextPackageJsonFile, 'utf8');
                  var nextPackageJsonData = JSON.parse(nextPackageJsonContent);
                  packageJsonData = helpers.updatePackageJsonData('dependencies', packageJsonData, nextPackageJsonData);
                  packageJsonData = helpers.updatePackageJsonData('devDependencies', packageJsonData, nextPackageJsonData);

                  // Remove temp directory
                  fsExtra.rmSync(tempNextCompPath, { recursive: true, force: true });

                } catch(error) {
                  console.log(chalk.yellow('Failed get nextjs components.'));
                }
                
              }

            } catch(error) {
              console.log(chalk.red('Download Components error.'));
              console.error(error);
              process.exit(1);
            }
          }

          console.log('Updating package.json');
          await fs.writeFile(
            packageJsonFile, 
            JSON.stringify(packageJsonData, null, 2), 
            'utf8', 
            function (err) {
              if (err) {
                console.log(chalk.red('Failed update package.json'));
                console.error(err);
                process.exit();
              }
            });
              
          // SUCCESS!!!!!
          console.log(`${chalk.green('Success!')} Created ${appName} at ${appPath}`);
          console.log('To finish the installation, please do this step:');
          console.log(`1. Run ${chalk.cyan(`cd ${appName}`)}.`);
          console.log(`2. Run ${chalk.cyan('yarn install')} for install dependencies.`);
          console.log(`3. Run ${chalk.cyan('yarn start')} for start developing.`);
          console.log(`4. Run ${chalk.cyan('yarn build')} for build production version.`);
          console.log(chalk.green('Have fun!!!'));
        });
      
    });
}

module.exports = {
  init,
};