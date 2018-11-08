//Fake simple database with accounts including username, password, events
var accountInfo = {'username': 'fan123',
                   'password': 'super123',
                   'event1': 'Basketball Tournament',
                   'event2': 'Boxing Class',
                   'index': 1};

//Fake  database
var Account= [
  {'username': 'soccer123', 'password': 'ball123', 'event1': 'Soccer Class', 'event2': 'Gymming Kids','index': 2},
  {'username': 'art123', 'password': 'class123', 'event1': 'Drawing', 'event2': 'Wine and Dine','index': 3},
  {'username': 'baller123', 'password': 'game123', 'event1': 'Beginner Yoga', 'event2': 'Wine and Dine','index': 4},
  {'username': 'amytran2', 'password': 'cogs120class', 'event1': 'Soccer Class', 'event2': 'Wine and Dine','index': 5},
  {'username': 'bobchen42', 'password': 'bobbie3', 'event1': 'Drawing', 'event2': 'Basketball 5 on 5','index': 6}
]


//FAKE database for events

//var eventInfo = {'actName': 'Soccer Class', 'startDate': 'Oct 3rd 2018', 'endDate': 'Oct 23rd 2018', 'address': '123 Birch St', 'numberPeople': '6', 'eventNum': 1}

//FAKE  database for events

var fakePosts = [
  {'actName': 'Drawing', 'startTime': 'Nov 3rd 2018 4PM', 'endTime': 'Nov 23rd 2018 7PM', 'address': '123 Blue St', 'numPeople': '14', 'description': 'MasterClasses are 3-hour painting workshops that focus on an artist or technique using Right-brain painting techniques. Each MasterClass begins with an information slideshow and lecture before artists move onto painting. Dance to music and create fun pieces that you’ll want to hang in your house.', 'creator': 'fakeUser'},
  {'actName': 'Beginner Yoga', 'startTime': 'Nov 20th 2018 3PM', 'endDate': 'Nov 30th 2018 5PM', 'address': '123 Green St', 'numPeople': '6', 'description': 'This class is designed for first time yogis. It is the right class for you if you want to learn the fundamentals of yoga in a group where everyone is new. The teacher will give you some background on yoga while you are seated, but come prepared to move. You’ll walk out feeling embodied, empowered, energized, and eager to come back.', 'creator': 'fakeUser'},
  {'actName': 'Wine and Dine', 'startTime': 'Oct 3rd 2018', 'endTime': 'Oct 23rd 2018', 'address': '1245 Lebon Drive', 'numPeople': '6', 'description': 'a fun class', 'creator': 'fakeUser'},
  {'actName': 'Basketball Tournament', 'startTime': 'Oct 3rd 2018', 'endTime': 'Oct 23rd 2018', 'address': '3458 Rock St', 'numbPeople': '6', 'description': 'a great class', 'creator': 'fakeUser'},
  {'actName': 'Boxing Class', 'startTime': 'Dec 3rd 2018', 'endTime': 'Dec 23rd 2018', 'address': 'Boxing Club', 'numPeople': '6', 'description': 'very fun', 'creator': 'fakeUser'},
  {'actName': 'Basketball 5 on 5', 'startTime': 'Oct 3rd 2018', 'endTime': 'Oct 23rd 2018', 'address': 'Amazon Park', 'numPeople': '6', 'description': 'great', 'creator': 'fakeUser'},
  {'actName': 'Gymming Kids', 'startTime': 'Nov 14th 2018', 'endTime': 'Nov 20th 2018', 'address': 'RIMAC', 'numPeople': '6', 'description': 'nice', 'creator': 'fakeUser'}
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

  //iterate through  info
  for (var i= 0; i < fakePosts.length; i++) {
    var curData= fakePosts[i];
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
