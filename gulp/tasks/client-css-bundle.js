/* jshint node: true */
'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var isProduction = require('is-production')();

var paths = require('../paths');

/**
 * Builds css bundle.
 */
gulp.task('client-css-bundle', ['bower'], function () {
    return merge(
        gulp.src(paths.src.client.css).pipe(gulpif(isProduction, minifyCSS())),
        gulp.src(paths.src.client.bowerCssFilesToInclude)
    )
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist/client'));
});