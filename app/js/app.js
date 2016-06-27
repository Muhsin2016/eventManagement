var eventApp = angular.module("eventApp", ['ngResource', 'ngRoute']);
eventApp.factory('Event', function($resource){
  return $resource('http://localhost:3000/events/:id', {id: '@_id'});
});

eventApp.config(function($routeProvider){
  $routeProvider.when('/events',
      {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListController'
      });
$routeProvider.when('/eventAdd',
{
  templateUrl: 'templates/eventAdd.html',
  controller: 'updateEventController'

});
$routeProvider.when('/events/:eventId',
    {
      templateUrl: 'templates/eventDetail.html',
      controller: 'eventDetailController'
    });
$routeProvider.otherwise({redirectTo: '/events'});

  })
