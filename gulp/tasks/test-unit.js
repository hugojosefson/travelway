/* jshint node: true */
'use strict';

var gulp = require('gulp');

/**
 * Runs all unit tests.
 */
gulp.task('test-unit', [
    'test-server-unit',
    'test-client-unit'
]);
