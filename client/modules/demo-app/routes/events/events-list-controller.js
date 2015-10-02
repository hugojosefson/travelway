angular.module('demoApp').controller('EventsListController', function (Event) {
    'use strict';

    var self = this;

    Event.query().then(function (events) {
        self.items = events;

    })
});