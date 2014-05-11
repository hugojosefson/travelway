/* jshint node: true */
'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var isProduction = require('is-production')();

var paths = require('../paths');

/**
 * Builds css bundle.
 */
gulp.task('client-css-bundle', function () {
    return gulp.src(paths.src.client.css)
        .pipe(concat('bundle.css'))
        .pipe(gulpif(isProduction, minifyCSS()))
        .pipe(gulp.dest('./dist/client'));
});