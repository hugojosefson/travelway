/* jshint node: true */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = require('../../paths');

/**
 * Builds AngularJS modules' css styles.
 */
module.exports = function () {
    return gulp.src(paths.src.client.moduleStyles)
        .pipe(concat('angular-module-styles.css'));
};