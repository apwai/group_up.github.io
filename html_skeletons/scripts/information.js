//Fake simple database with accounts including username, password, events
var accountInfo = {'username': 'fan123',
                   'password': 'super123',
                   'event1': 'Basketball Tournament',
                   'event2': 'Boxing Class',
                   'index': 1};

//Fake  database
var accounts= [
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
  {'actName': 'Drawing', 'startTime': '12/11/2018 4:00PM', 'endTime': '12/11/2018 7:00PM', 'address': '123 Blue St', 'numPeople': '14', 'description': 'MasterClasses are 3-hour painting workshops that focus on an artist or technique using Right-brain painting techniques.', 'creator': 'fakeUser'},
  {'actName': 'Beginner Yoga', 'startTime': '11/12/2018 7:00AM', 'endTime': '11/12/2018 9:00AM', 'address': '452 Green St', 'numPeople': '6', 'description': 'This class is designed for first time yogis. It is the right class for you if you want to learn the fundamentals of yoga in a group where everyone is new. The teacher will give you some background on yoga while you are seated, but come prepared to move. You’ll walk out feeling embodied, empowered, energized, and eager to come back.', 'creator': 'fakeUser'},
  {'actName': 'Wine and Dine', 'startTime': '11/10/2018 6:00PM', 'endTime': '11/10/2018 9:00PM', 'address': '1245 Lebon Drive', 'numPeople': '8', 'description': 'a fun class to draw and drink wine', 'creator': 'fakeUser'},
  {'actName': 'Basketball Tournament', 'startTime': '11/14/2018 9:00AM', 'endTime': '11/14/2018 3:00PM', 'address': '3458 Rock St', 'numPeople': '6', 'description': 'a great class to work', 'creator': 'fakeUser'},
  {'actName': 'Boxing Class', 'startTime': '12/03/2018 11:20AM', 'endTime': '12/03/2018 2:00PM', 'address': 'Boxing Club', 'numPeople': '10', 'description': 'A boxing class made for beginners and taught by professionals.', 'creator': 'fakeUser'},
  {'actName': 'Basketball 5 on 5', 'startTime': '10/23/2018 5:00PM', 'endTime': '10/23/2018 8:00PM', 'address': 'Amazon Park', 'numPeople': '11', 'description': 'great', 'creator': 'fakeUser'},
  {'actName': 'Gymming Kids', 'startTime': '11/14/2018 2:30PM', 'endTime': '11/14/2018 3:30PM', 'address': 'RIMAC', 'numPeople': '20', 'description': 'Gymming Session.', 'creator': 'fakeUser'}
];

//Call this function when page loads
// $(document).ready(function() {
//   console.log('hello world');
//
//   //Compile the template
//   var source = $("#events-template").html();
//   var template = Handlebars.compile(source)
//   var parentDiv = $("#templatedEvents");
//
//   //Simple template
//
//   // var html = template(eventInfo);
//   // console.log(html);
//   // parentDiv.append(html);
//
//   //iterate through  info
//   for (var i= 0; i < fakePosts.length; i++) {
//     var curData= fakePosts[i];
//     var curHtml = template(curData);
//     parentDiv.append(curHtml);
//   }
// });


// function handleEventClick(far, eventId) {
//   console.log('run');
//   $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// }
//
// var modal = document.querySelector(".modal");
// var events = document.querySelector(".events");
// var closeButton = document.querySelector(".close-button");
//
// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })
