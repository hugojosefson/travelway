/* jshint node: true */
'use strict';

var gulp = require('gulp');
var gulpIgnore = require('gulp-ignore');

var paths = require('../paths');

/**
 * Copies client static resources (except html templates, css styles).
 */
gulp.task('client-static', function () {
    return gulp
        .src(paths.src.client.static)
        .pipe(gulpIgnore.exclude(function (vinyl) {
            // Exclude empty directories
            return vinyl.isDirectory();
        }))
        .pipe(gulp.dest('./dist/client'));
});