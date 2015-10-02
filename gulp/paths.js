/* jshint node: true */
'use strict';

var fs = require('fs');
var isProduction = require('is-production')();

var string = fs.readFileSync('.bowerrc', {encoding: 'utf8'});
var bowerDirectory = JSON.parse(string).directory;

var serverTests = 'server/**/*-test.js';

module.exports = {
    'bower-directory': bowerDirectory + '/',
    src: {
        'package-json': 'package.json',
        'bower-json': 'bower.json',
        server: [
            'server/**',
            '!' + serverTests
        ],
        client: {
            bowerJsFilesToInclude: [
                bowerDirectory + '/jquery/dist/jquery' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular/angular' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular-route/angular-route' + (isProduction ? '.min.js' : '.js'),
                bowerDirectory + '/angular-parse/angular-parse.js'
            ],
            bowerCssFilesToInclude: [
            ],
            modulesJs: [
                './client/modules/**/*.js',
                '!./client/modules/**/*-test.js'
            ],
            modulesCoffee: [
                './client/modules/**/*.coffee',
                '!./client/modules/**/*-test.coffee'
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
    test: {
        server: serverTests,
        client: {
            karmaConf: __dirname + '/../karma.conf.js'
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