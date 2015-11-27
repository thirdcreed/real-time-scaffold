'use strict';

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

function Transpile(options) {

  function transpile() {
    var src = 'src/client/**/*.js';
    return gulp
            .src(src)
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(concat("all.js"))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(options.buildFolder));
  }
  
  gulp.task('transpile', transpile);
}

module.exports = Transpile;
