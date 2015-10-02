angular.module('demoApp').factory 'Event', (Parse) ->
    class Event extends Parse.Model
        @configure 'Event', 'name', 'location', 'imageKey'