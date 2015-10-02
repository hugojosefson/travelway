angular.module('demoApp').config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            redirectTo: '/events'
        })
        .when('/events', {
            templateUrl: 'modules/demo-app/routes/events/list.html'
        })
        .when('/events/new', {
            templateUrl: 'modules/demo-app/routes/events/create-event.html'
        })
        .when('/events/:index', {
            templateUrl: 'modules/demo-app/routes/events/edit-event.html'
        })
        .otherwise({
            template: '<h1>404 SPA route not found</h1>'
        });
});