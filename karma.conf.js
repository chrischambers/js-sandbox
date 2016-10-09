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
      '/lib/':    '/base/lib/',
      '/specs/':  '/base/specs/'
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


    browsers: ['Chromium'],
    reporters: ['progress']
  });
};
