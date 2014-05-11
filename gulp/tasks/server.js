/* jshint node: true */
'use strict';

var gulp = require('gulp');

var paths = require('../paths');

/**
 * Builds the server.
 */
gulp.task('server', ['package-json'], function () {
    return gulp
        .src(paths.src.server)
        .pipe(gulp.dest(paths.dest.server));
});
