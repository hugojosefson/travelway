/* jshint node: true */
'use strict';

var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');

tasks
    .filter(function (task) {
        return (/\.js$/).test(task);
    })
    .forEach(function (task) {
        require('./tasks/' + task);
    });