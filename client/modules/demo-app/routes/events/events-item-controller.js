angular.module('demoApp').controller('EventsItemController', function (eventsItems, $routeParams, $scope) {
    'use strict';

    var self = this;

    self.item = eventsItems[$routeParams.index];

    $scope.$watch(function () {
        return self.location && '' + self.location.longitude + ':' + self.location.latitude;
    }, function (newValue) {
        if (typeof newValue === 'string') {
            self.item = self.item || {};
            self.item.location = new Parse.GeoPoint({
                longitude: self.location.longitude,
                latitude: self.location.latitude
            });
        }
    });

    self.clearLocation = function () {
        self.item.location = null;
    };

    self.save = function (item) {
        console.log('saving ', item);
    };
});