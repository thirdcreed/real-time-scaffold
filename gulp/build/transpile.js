'use strict';
var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

function Transpile(options) {

  function transpile() {

    return browserify({debug:true})
            .transform(babelify)
            .require(options.clientFolder + '/app.js', { entry: true })
            .bundle()
            .on('error',function(err){ console.log('Error: ' + err.message)})
            .pipe(fs.createWriteStream(options.buildFolder + '/app.js'));
  }

  gulp.task('transpile', transpile);
}

module.exports = Transpile;
