eventApp.factory("eventData",function($resource,Event){
  return {
  getEvents: function(){
    return Event.query();
  },
  addEvent: function(event) {
    event.$save();
  },
  updateEvent: function(event) {
    event.$save();
  },
  getEvent: function(eventId) {
      return Event.get({id:eventId});
  }
}
})
