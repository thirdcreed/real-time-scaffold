'use strict';

var gulpOptions = require('./gulpOptions');
var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

require('./gulp/build')(gulpOptions);
require('./gulp/serve')(gulpOptions);
//require('./gulp/test')(gulpOptions);

gulp.task('default', taskListing);
