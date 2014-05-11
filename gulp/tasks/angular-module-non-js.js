/* jshint node: true */
'use strict';

var gulp = require('gulp');
var gulpIgnore = require('gulp-ignore');

var paths = require('../paths');

/**
 * Copies AngularJS modules' static resources (except html templates, css styles).
 */
gulp.task('angular-module-non-js', function () {
    return gulp
        .src(paths.src.client.moduleNonJs)
        .pipe(gulpIgnore.exclude(function (vinyl) {
            // Exclude empty directories
            return vinyl.isDirectory();
        }))
        .pipe(gulp.dest('./dist/client/modules'));
});