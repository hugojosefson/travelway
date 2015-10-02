angular.module('demoApp').controller('EventsListController', function (eventsItems) {
    'use strict';

    this.items = eventsItems;
});