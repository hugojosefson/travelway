/* jshint node: true */
'use strict';

var gulp = require('gulp');
var productionPackageJson = require('gulp-production-package-json');

var paths = require('../paths');

/**
 * Builds the `package.json` used in production.
 */
gulp.task('package-json', function () {
    gulp.src(paths.src['package-json'])
        .pipe(productionPackageJson())
        .pipe(gulp.dest(paths.dest['package-json']));
});