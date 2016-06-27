eventApp.controller("eventDetailController", function($scope, eventData,$routeParams) {
$scope.event = eventData.getEvent($routeParams.eventId);
});
