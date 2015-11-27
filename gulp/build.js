'use strict';

var gulp = require('gulp');

function Build(options) {

  require('./build/transpile')(options);
  gulp.task('build', [ 'transpile' ]);
  
}

module.exports = Build;
