/* global module */
module.exports = function (config) {
  'use strict';
  config.set({
    autoWatch: true,

    frameworks: ['jspm', 'jasmine', 'jasmine-matchers', 'source-map-support'],
    files: ['node_modules/babel-polyfill/dist/polyfill.js'],

    jspm: {
      config:     'config.js',
      loadFiles:  ['specs/**/*.js'],
      serveFiles: ['lib/**/*.js']
    },

    proxies: {
      '/lib/':            '/base/lib/',
      '/specs/':          '/base/specs/',
      '/jspm_packages/':  '/base/jspm_packages/'
    },

    preprocessors: {
      'lib/**/*.js':   ['babel', 'sourcemap'],
      'specs/**/*.js': ['babel', 'sourcemap']
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },

    reporters: ['progress'],

    browsers: ['ChromiumSmall'],
    customLaunchers: {
        ChromiumSmall: {
            base: 'Chromium',
            flags: [
              '--window-size=200,200',
              '--window-position=-400,0'
            ]
        }
    }
  });
};
