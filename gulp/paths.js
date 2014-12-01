/* jshint node: true */
'use strict';

var fs = require('fs');

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
            ],
            bowerCssFilesToInclude: [
            ],
            js: [
                './client/**/*.js',
                '!./client/**/*-test.js'
            ],
            css: './client/**/*.css',
            static: [
                './client/**',
                '!./client/**/*.js',
                '!./client/**/*.css'
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