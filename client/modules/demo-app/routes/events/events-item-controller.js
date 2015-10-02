angular.module('demoApp').controller('EventsItemController', function (Event, $routeParams, $scope, $location) {
    'use strict';
    var self = this;

    Event.query().then(function (events) {
        console.log('events', events);

        self.item = events[$routeParams.index];
        if (self.item === undefined) {
            console.log('this is new');
            self.item = new Event({
                numberOfParticipants: 0,
                imageKey: 'eiffel'
            });
            console.log('created self.item', self.item);
        } else {
            console.log('loaded self.item', self.item);
        }


        $scope.$watch(function () {
            return self.location && '' + self.location.longitude + ':' + self.location.latitude;
        }, function (newValue) {
            if (typeof newValue === 'string') {
                self.item = self.item || {};
                self.item.location = {
                    __type: 'GeoPoint',
                    longitude: self.location.longitude,
                    latitude: self.location.latitude
                };
            }
        });

        self.clearLocation = function () {
            self.item.location = null;
        };

        self.save = function (item) {
            console.log('saving', item);
            item.save().then(function (result) {
                console.log('saved', result);
                $location.path('/events');
            }, function (reason) {
                console.error('failed to save', item, reason);
            });
        };
    });

});