/* eslint-disable */
const path = require('path');
const sass = require('sass');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = function (grunt) {
  'use strict';

  // var alias = require("browserify-alias-grunt");

  //
  //Grunt config
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner:
        '/*! <%= pkg.name %> - v<%= pkg.version %> - built on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      style_src: 'demo/styles/',
      style_dist: 'demo/dist/css/',
      js_src: 'demo/js/',
      js_dist: 'demo/dist/js/',
      pug_src: 'demo/pug/',
      pug_dist: 'demo/dist/',
    },

    browserify: {
      main: {
        options: {
          transform: [['babelify', { presets: ['@babel/env'] }]]
        },
        files: [
          {
            expand: true,
            cwd: '<%= meta.js_src %>',
            src: ['*.js'],
            dest: '<%= meta.js_dist %>',
            ext: '.js',
          },
        ],
      },
    },

    uglify: {
      general: {
        files: [{
          expand: true,
          cwd: '<%= meta.js_dist %>',
          src: ['*.js'],
          dest: '<%= meta.js_dist %>',
          ext: '.js',
        }]
      },
    },

    postcss: {
      options: {
        processors: [
          require('postcss-short')(),
          require('postcss-fontpath')(),
          require('autoprefixer')({
            overrideBrowserslist: ['last 2 versions', 'ie 6-8', 'Firefox > 20'],
          }),
          require('cssnano')(),
        ],
      },
      dist: {
        src: '<%= meta.style_dist %>*.css',
      },
    },

    sass: {
      basic: {
        options: {
          implementation: sass,
          compass: true,
          sourcemap: 'none',
          style: 'expended',
        },
        files: [
          {
            expand: true,
            cwd: '<%= meta.style_src %>',
            src: ['*.sass', '*.scss'],
            dest: '<%= meta.style_dist %>',
            ext: '.css',
          },
        ],
      },
    },

    concat: {
      sample: {
        src: [
          '<%= meta.style_src %>_dist/libs.css',
          '<%= meta.style_src %>vendors/*.css',
          '<%= meta.style_src %>_dist/styles.css',
        ],
        dest: '<%= meta.style_dist %>styles.css',
      },
    },

    pug: {
      main: {
        options: {
          pretty: true,
          data: {
            debug: false,
          },
        },
        files: [
          {
            expand: true,
            cwd: '<%= meta.pug_src %>',
            src: ['**/*.pug'],
            dest: '<%= meta.pug_dist %>',
            ext: '.html',
          },
        ],
      },
    },

    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '../../assets/images',
            src: '**',
            dest: 'demo/dist/assets',
          },
        ],
      },
    },

    watch: {
      options: {
        spawn: false,
        interrupt: false,
        livereload: true,
      },
      style: {
        files: [
          '<%= meta.style_src %>/**/*.sass', 
          '<%= meta.style_src %>/**/*.scss',
          '../scss/**/*.scss'
        ],
        tasks: ['sass'],
      },
      script: {
        files: [
          '<%= meta.js_src %>/**/*.js',
          'demo/js/**/*.js'
        ],
        tasks: ['browserify'],
      },
      pug: {
        files: ['<%= meta.pug_src %>/**/*.pug'],
        tasks: ['pug'],
      },
    },

    clean: {
      options: {
        force: true,
      },
      dev: [
        '<%= meta.style_dist %>',
        '<%= meta.js_dist %>',
        '<%= meta.pug_dist %>*.html',
      ],
      css: ['<%= meta.style_dist %>'],
      js: ['<%= meta.js_dist %>js'],
      prod: ['<%= meta.pug_dist %>*.html'],
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'demo/dist/',
          port: 5000,
        },
      },
    },
  };

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');

  //
  // Build tasking
  //
  grunt.registerTask('build', [
    'clean:dev',
    'copy',
    'sass',
    'postcss',
    'pug',
    'browserify',
    'uglify',
  ]);
  grunt.registerTask('serve', ['connect:server', 'watch']);
};
