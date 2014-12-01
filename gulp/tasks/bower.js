/* jshint node: true */
'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

var paths = require('../paths');
var bowerDirectory = paths['bower-directory'];

gulp.task('bower', function () {
    return bower({directory: bowerDirectory});
});