/* jshint node: true */
'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var isProduction = require('is-production')();

var paths = require('../paths');

/**
 * Builds js bundle.
 */
gulp.task('client-js-bundle', function () {
    return gulp.src(paths.src.client.js)
        .pipe(concat('bundle.js'))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(gulp.dest('./dist/client'));
});