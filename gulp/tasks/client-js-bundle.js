/* jshint node: true */
'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var isProduction = require('is-production')();

var paths = require('../paths');

/**
 * Builds js bundle.
 */
gulp.task('client-js-bundle', ['bower'], function () {
    return merge(
        require('./source-streams/angular-modules')().pipe(gulpif(isProduction, uglify())),
        require('./source-streams/angular-module-templates')().pipe(gulpif(isProduction, uglify())),
        gulp.src(paths.src.client.bowerJsFilesToInclude)
    )
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/client'));
});