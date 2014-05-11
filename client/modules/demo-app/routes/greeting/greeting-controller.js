angular.module('demoApp').controller('GreetingController', function () {
    'use strict';

    this.phrase = 'Hi there';

    this.save = function (what) {
        alert('Saving: ' + JSON.stringify(what));
    };
});