/* jshint node: true */
'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

var paths = require('../paths');

gulp.task('test-server-unit', function () {
    return gulp.src(paths.test.server, {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }));
});