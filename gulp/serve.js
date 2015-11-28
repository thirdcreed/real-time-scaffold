'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

function Serve() {
  function startServer() {

  var opts = {
    script: './src/server/index.js',
    watch: ['src'],
    tasks: ['transpile']
  };
    nodemon(opts);
  }

  gulp.task('serve', startServer);
}

module.exports = Serve;
