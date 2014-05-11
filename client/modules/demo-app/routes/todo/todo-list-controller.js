angular.module('demoApp').controller('TodoListController', function (todoItems) {
    'use strict';

    this.items = todoItems;
});