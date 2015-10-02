angular.module('demoApp').controller('EventsListController', function (Event) {
    'use strict';

    var self = this;

    Event.query().then(function (events) {
        self.items = events;
    });

    self.delete = function (item) {
        console.log('deleting', item);
        item.destroy().then(function () {
            console.log('success deleting');
            Event.query().then(function (events) {
                self.items = events;
            });
        }, function (reason) {
            console.error('failed to delete Event', item, reason);
        });
    };
});