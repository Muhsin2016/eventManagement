eventApp.controller("eventListController", function($scope, eventData) {
console.log(eventData.getEvents())
  $scope.events = eventData.getEvents();

  $scope.upVote = function(event){
    event.likes++;
    eventData.updateEvent(event);

  }
  $scope.downVote = function(event){
    event.unlikes++;
    eventData.updateEvent(event);
  }
});
