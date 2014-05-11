angular.module('demoApp').controller('TodoItemController', function (todoItems, $routeParams) {
    'use strict';

    this.item = todoItems[$routeParams.index];
});