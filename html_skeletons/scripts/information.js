//Fake simple database with accounts including username, password, events
var accountInfo = {'username': 'fan123',
                   'password': 'super123',
                   'event1': 'Basketball Tournament',
                   'event2': 'Boxing Class',
                   'index': 1};

//Fake complex database
var complexAccount= [
  {'username': 'soccer123', 'password': 'ball123', 'event1': 'Soccer Class', 'event2': 'Gymming Kids','index': 2},
  {'username': 'art123', 'password': 'class123', 'event1': 'Drawing', 'event2': 'Wine and Dine','index': 3},
  {'username': 'baller123', 'password': 'game123', 'event1': 'Beginner Yoga', 'event2': 'Wine and Dine','index': 4},
  {'username': 'amytran2', 'password': 'cogs120class', 'event1': 'Soccer Class', 'event2': 'Wine and Dine','index': 5},
  {'username': 'bobchen42', 'password': 'bobbie3', 'event1': 'Drawing', 'event2': 'Basketball 5 on 5','index': 6}
]


//FAKE database for events

//var eventInfo = {'actName': 'Soccer Class', 'startDate': 'Oct 3rd 2018', 'endDate': 'Oct 23rd 2018', 'address': '123 Birch St', 'numberPeople': '6', 'eventNum': 1}

//FAKE complex database for events

var complexEvent = [
  {'actName': 'Drawing', 'startDate': 'Nov 3rd 2018', 'endDate': 'Nov 23rd 2018', 'address': '123 Blue St', 'numberPeople': '14', 'description': 'MasterClasses are 3-hour painting workshops that focus on an artist or technique using Right-brain painting techniques. Each MasterClass begins with an information slideshow and lecture before artists move onto painting. Dance to music and create fun pieces that you’ll want to hang in your house.', 'eventNum': 2},
  {'actName': 'Beginner Yoga', 'startDate': 'Nov 20th 2018', 'endDate': 'Nov 30th 2018', 'address': '123 Green St', 'numberPeople': '6', 'description': 'This class is designed for first time yogis. It is the right class for you if you want to learn the fundamentals of yoga in a group where everyone is new. The teacher will give you some background on yoga while you are seated, but come prepared to move. You’ll walk out feeling embodied, empowered, energized, and eager to come back.', 'eventNum': 3},
  {'actName': 'Wine and Dine', 'startDate': 'Oct 3rd 2018', 'endDate': 'Oct 23rd 2018', 'address': '1245 Lebon Drive', 'numberPeople': '6', 'description': 'a fun class', 'eventNum': 4},
  {'actName': 'Basketball Tournament', 'startDate': 'Oct 3rd 2018', 'endDate': 'Oct 23rd 2018', 'address': '3458 Rock St', 'numberPeople': '6', 'description': 'a great class', 'eventNum': 5},
  {'actName': 'Boxing Class', 'startDate': 'Dec 3rd 2018', 'endDate': 'Dec 23rd 2018', 'address': 'Boxing Club', 'numberPeople': '6', 'description': 'very fun', 'eventNum': 6},
  {'actName': 'Basketball 5 on 5', 'startDate': 'Oct 3rd 2018', 'endDate': 'Oct 23rd 2018', 'address': 'Amazon Park', 'numberPeople': '6', 'description': 'great', 'eventNum': 7},
  {'actName': 'Gymming Kids', 'startDate': 'Nov 14th 2018', 'endDate': 'Nov 20th 2018', 'address': 'RIMAC', 'numberPeople': '6', 'description': 'nice', 'eventNum': 8}
]

//Call this function when page loads
$(document).ready(function() {
  console.log('hello world');

  //Compile the template
  var source = $("#events-template").html();
  var template = Handlebars.compile(source)
  var parentDiv = $("#templatedEvents");

  //Simple template

  // var html = template(eventInfo);
  // console.log(html);
  // parentDiv.append(html);

  //iterate through complex info
  for (var i= 0; i < complexEvent.length; i++) {
    var curData= complexEvent[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
});


function handleEventClick(far, eventId) {
  console.log('run');
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
}

var modal = document.querySelector(".modal");
var events = document.querySelector(".events");
var closeButton = document.querySelector(".close-button");

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
