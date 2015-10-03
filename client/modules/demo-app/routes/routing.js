angular.module('demoApp').config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'modules/demo-app/routes/root/root.html'
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