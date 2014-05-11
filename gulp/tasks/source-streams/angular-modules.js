/* jshint node: true */
'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var ngFilesort = require('gulp-angular-filesort');

var paths = require('../../paths');

/**
 * Builds the AngularJS modules.
 * This includes module definitions, and module components.
 */
module.exports = function () {
    return gulp
        .src(paths.src.client.modules)
        .pipe(ngAnnotate())
        .pipe(ngFilesort());
};