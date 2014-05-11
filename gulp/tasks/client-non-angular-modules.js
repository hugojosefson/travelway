/* jshint node: true */
'use strict';

var gulp = require('gulp');

var paths = require('../paths');

/**
 * Copies client files which are not part of any AngularJS module.
 */
gulp.task('client-non-angular-modules', ['bower'], function () {
    return gulp
        .src(paths.src.client.nonAngularModules)
        .pipe(gulp.dest('./dist/client'));
});
