angular.module('demoApp').config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'modules/demo-app/routes/root/root.html'
        })
        .when('/greeting', {
            templateUrl: 'modules/demo-app/routes/greeting/greeting.html'
        })
        .when('/todo', {
            templateUrl: 'modules/demo-app/routes/todo/list.html'
        })
        .when('/todo/:index', {
            templateUrl: 'modules/demo-app/routes/todo/details.html'
        })
        .when('/events', {
            templateUrl: 'modules/demo-app/routes/events/list.html'
        })
        .when('/events/:index', {
            templateUrl: 'modules/demo-app/routes/events/details.html'
        })
        .otherwise({
            template: '<h1>404 SPA route not found</h1>'
        });
});