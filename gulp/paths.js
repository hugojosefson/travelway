/* jshint node: true */
'use strict';

var fs = require('fs');
var isProduction = require('is-production')();

var string = fs.readFileSync('.bowerrc', {encoding: 'utf8'});
var bowerDirectory = JSON.parse(string).directory;

module.exports = {
    'bower-directory': bowerDirectory + '/',
    src: {
        'package-json': 'package.json',
        'bower-json': 'bower.json',
        server: [
            'server/**'
        ],
        client: {
            bowerJsFilesToInclude: [
                bowerDirectory + '/jquery/dist/jquery' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/bootstrap/dist/js/bootstrap' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular/angular' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular-route/angular-route' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular-parse/angular-parse.js'
            ],
            bowerCssFilesToInclude: [
                bowerDirectory + '/bootstrap/dist/css/bootstrap' + (isProduction ? '.min.css' : '.css'),
                bowerDirectory + '/bootstrap/dist/css/bootstrap-theme' + (isProduction ? '.min.css' : '.css')
            ],
            modulesJs: [
                './client/modules/**/*.js'
            ],
            modulesCoffee: [
                './client/modules/**/*.coffee'
            ],
            moduleStyles: './client/modules/**/*.css',
            moduleTemplates: './client/modules/**/*.html',
            moduleNonJs: [
                './client/modules/**',
                '!./client/modules/**/*.html',
                '!./client/modules/**/*.css',
                '!./client/modules/**/*.js'
            ],
            nonAngularModules: [
                './client/**',
                '!./client/modules',
                '!./client/modules/**'
            ],
            nonAngularModulesExceptBowerComponents: [
                './client/**',
                ('!./' + bowerDirectory),
                ('!./' + bowerDirectory + '/**'),
                '!./client/modules',
                '!./client/modules/**'
            ]
        }
    },
    dest: {
        'package-json': 'dist/',
        server: 'dist/',
        client: {
            root: 'dist/client'
        }
    },
    clean: {
        build: 'dist/**',
        bower: bowerDirectory + '/**'
    },
    watch: {
        server: [
            './dist/**',
            '!./dist/package.json',
            '!./dist/node_modules',
            '!./dist/node_modules/**',
            '!./dist/client',
            '!./dist/client/**'
        ]
    }
};