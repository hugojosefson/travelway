/* jshint node: true */
'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

var paths = require('../../paths');

/**
 * Builds AngularJS modules' html templates into the actual modules, via js.
 */
module.exports = function () {
    return gulp.src(paths.src.client.moduleTemplates)
        .pipe(templateCache('angular-module-templates.js', {
            standalone: true,
            root: 'modules'
        }));
};