angular.module('demoApp').controller('EventsItemController', function (eventsItems, $routeParams) {
    'use strict';

    this.item = eventsItems[$routeParams.index];
});