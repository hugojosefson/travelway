/* jshint node: true */
'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var coffee = require('gulp-coffee');
var ngAnnotate = require('gulp-ng-annotate');
var ngFilesort = require('gulp-angular-filesort');

var paths = require('../../paths');

/**
 * Builds the AngularJS modules.
 * This includes module definitions, and module components.
 */
module.exports = function () {
    return merge(
        gulp.src(paths.src.client.modulesJs),
        gulp.src(paths.src.client.modulesCoffee).pipe(coffee())
    )
        .pipe(ngAnnotate())
        .pipe(ngFilesort());
};