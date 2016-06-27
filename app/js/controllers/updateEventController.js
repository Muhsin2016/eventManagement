eventApp.controller("updateEventController", function($scope, eventData, Event) {


$scope.event = new Event();
$scope.event.schedules = [
  {"time":"","name":""},
  {"time":"","name":""},
  {"time":"","name":""},
  {"time":"","name":""},
  {"time":"","name":""},
];
$scope.AddEvent = function(event){
  console.log(event);
  event.likes = 0;
  event.unlikes = 0;
  eventData.addEvent(event);
}
$scope.upVote = function(event){
  event.likes ++;
  eventData.updateEvent(event);

}
$scope.downVote = function(event){
  event.unlikes ++;
  eventData.updateEvent(event);
}
});
