/* jshint node: true */
'use strict';

var gulp = require('gulp');

/**
 * Builds the client.
 */
gulp.task('client', [
    'client-js-bundle',
    'client-css-bundle',
    'angular-module-non-js',
    'client-non-angular-modules'
]);
