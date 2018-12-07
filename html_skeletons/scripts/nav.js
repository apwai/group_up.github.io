function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toProfile(clickedUser) {
    //we will need to modify this method later when we get more users in the system - VK

    var users = JSON.parse(localStorage.getItem("allUsers") || "[]");
    users.forEach(function(user) {

      if (user.username == clickedUser) {
        localStorage.setItem('clickedProfileUsername', user.username);
        localStorage.setItem('clickedProfileFirstName', user.firstname);
        localStorage.setItem('clickedProfileLastName', user.lastname);
        localStorage.setItem('clickedProfileFB', user.fbURL);


          localStorage.setItem('clickedProfileImage', user.profilesrc);

  //      localStorage.setItem('clickedProfileEmail', user.));
          localStorage.setItem('clickedProfileActivities', user.activities);



        location.href = './profile.html';
      }

    });
}

function unjoinEvent(id) {
  posts = JSON.parse(localStorage.getItem('posts') || "[]");
  count = 0;
  posts.forEach(function(post) {
      if(post.id == id) {
          currUser = localStorage.getItem("currUser");
          post.userList.forEach(function(user) {
            if (user == currUser) {
              delete post.userList[count];
            }
            count += 1;
          });
          post.numJoined -= 1;
      }
  });

  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = './myposts.html';
}

function joinEvent(id) {
  posts = JSON.parse(localStorage.getItem('posts') || "[]");

  posts.forEach(function(post) {
      if(post.id == id) {
          user = localStorage.getItem("currUser");
          post.userList.push(user);
          post.numJoined += 1;
      }
  });

  localStorage.setItem("posts", JSON.stringify(posts));
  window.location.href = './myposts.html';
}

function checkJoined(id) {
  posts = JSON.parse(localStorage.getItem('posts') || "[]");

  posts.forEach(function(post) {
      if(post.id == id) {
          user = localStorage.getItem("currUser");
      }
  });
}

function addNewPost(post, checkJoin) {

    actName = post.actName;
    startDate = post.startTime;
    endDate = post.endTime;
    numPeople = post.numPeople;
    address = post.address;
    description = post.description;
    id = post.id;
    numJoined = post.numJoined;
    userList = post.userList;
    creator = post.creator;
    category = post.category;

    // get list of users for event
    listOfAttendees = "";
    userList.forEach(function(user) {

      listOfAttendees += "<button type='button' class='btn btn-info' onclick='toProfile(" + "\"" + user + "\"" + ")'> "+ user + "</button>" + ' ';
    });

    if(category == "Basketball") {
      icon = "basketball.png";
    }

    if(category== "Boxing") {
      icon = "boxing.svg";
    }

    if (category== "Football") {
      icon = "football.svg";
    }

    if (category == "Swimming") {
      icon = "swimming-pool.png";
    }

    if (category == "Soccer") {
      icon = "soccer.png";
    }

    if (category == "GeneralSports") {
      icon = "balls.png";
    }
    if (category == "OutdoorSports") {
      icon = "hiking.png";
    }
    if(category == "GeneralArt") {
      icon="rgb.png"
    }
    if(category == "Dance") {
      icon="dance.png";
    }
    if(category == "Hangout") {
      icon= "hangout.png";
    }
    if(category == "Film") {
      icon="camera.png";
    }
    if (category == "Drawing") {
      icon = "painting.png";
    }
    else {
      icon="";
    }

    var table = document.getElementById("posts");
    var length = 3;
    if (table.rows.length > 0) {
        length = table.rows[table.rows.length - 1].childElementCount;
    }

    if (length == 3) {
        table.insertRow(-1);
        table.insertRow(-1);
        length = 0;
    }

    var allRows = table.getElementsByTagName('tr');
    var numRows = allRows.length;

    var cell = allRows[numRows - 1].insertCell(length);

    var index = parseInt(localStorage.getItem('numPosts'));

    numPosts = index + 1;
    posts = JSON.parse(localStorage.getItem('posts') || "[]");

    cell.width = 225;
    cell.height = 225;
      if (checkJoin == true) {
        buttonString = "<button type='button' class='btn btn-primary' id= 'joinButton' data-dismiss='modal' onclick='unjoinEvent(" + id + ")'>Unjoin Event</button>"
      }

      else {
        buttonString = "<button type='button' class='btn btn-primary' id= 'joinButton' data-dismiss='modal' onclick='joinEvent(" + id + ")'>Join Event</button>"
      }
      cell.innerHTML = "<div id = 'postNumber" + index +  "' class='modal fade' role='dialog'>"
        + "<div class='modal-dialog' role='document'>"
        + "<div class='modal-content'>"
        +    "<div class='modal-header'>"
        +      "<h5 class='modal-title'>" + actName + "</h5>"
        +      "<button type='button' class='close' data-dismiss='modal'>&times;</button>"
        +    "</div>"
        +    "<div class='modal-body'>"
        + "<div class = 'popupInfo'>"
        + startDate + " - " + endDate + "<br/>"
        +  address + "<br/>"
        + numJoined + "/" + numPeople + " spots filled<br/>" //will need to fix this when changing how many people have joined
        + description + "<br/> </div>"
        +    "</div>"
        /* start extra info */
          +      "<div class='panel-group'>"
          +         "<div class='panel panel-default'>"
          +           "<div class='panel-heading'>"
          +             "<h4 class='panel-title'>"
          + "<a data-toggle='collapse' href='#collapse" + id +"'> See List of Attendees </a>"
          + "</h4>"
          + "</div>"
          + "<div id='collapse" + id + "' class='panel-collapse collapse'>"
          +   "<div class='panel-body'> "+ listOfAttendees + "  </div>"
          + "</div>"
          + "</div>"
          + "</div>"
        +    "<div class='modal-footer'>"
        +      buttonString
        +      "<button type='button' class='btn btn-info' onclick='toProfile(" + 'creator' +")'>See Host Profile</button>"
        +      "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
        + "<br>"
        +    "</div>"
        +  "</div>"
        + "</div>"
        + "</div>"

      /* the event buttons */
      + "<button onclick = 'checkJoined(" + id + ")' class = 'eventsButton' data-toggle='modal' data-target = '#postNumber" + index + "'>"
      + actName + "<br/>"
      + "<div class ='eventInfo'>"
      + address + "<br/>"
      + startDate + "<br/> "
      + "<input type= 'image' src=" + icon + " width = '60px' height= '60px'>"
      + "</div>"
      + "</button>";


    /*posts = JSON.parse(localStorage.getItem('posts') || "[]");

    posts.push({id: id, actName: actName, startTime: startDate, endTime: endDate, address: address, numPeople: numPeople, numJoined: 1, description: description, creator: creator, userList: [creator]});*/
    localStorage.setItem('numPosts', numPosts);

  }

function getEvents() {
  //FIND THE POSTS THAT THEY CREATE AND THE POSTS THEY JOIN
  console.log(posts)
}
function populate() {

    $('#posts').empty();
    localStorage.setItem('numPosts', 0);
    posts = JSON.parse(localStorage.getItem("posts") || "[]");

    var hasEvent = false;
      posts.forEach(function(post) {
        if (post.userList.includes(localStorage.getItem('currUser'))) {
          hasEvent = true;
          addNewPost(post, true);
        }


       // if (post.creator == localStorage.getItem('currUser')) {
       //    if (post.userList.includes(localStorage.getItem('currUser'))) {
       //      addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, true);
       //    } else {
       //      addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, false);
       //    }
       //  }
      });

      if (!hasEvent) {
        var table = document.getElementById("posts");
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = "<h3>Whoops. You don't have any joined events.</h3>";
      }
}

function strcmp(a, b) {
    return (a<b?-1:(a>b?1:0));
}



function searchResults() {

    $('#posts').empty();
    search = document.getElementById("search").value;
    posts = JSON.parse(localStorage.getItem("posts") || "[]");

    num = 0;
    posts.forEach(function(post) {

      if((post.actName.toLowerCase()).includes(search.toLowerCase())) {
          //addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description);
          if(post.userList.includes(localStorage.getItem("currUser"))) {
            addNewPost(post, true);
            num++;
        }
      }
    });

    if(num == 0) {
      var table = document.getElementById("posts");
      var row = table.insertRow(0);

      var cell = row.insertCell(0);

      cell.innerHTML = "<h3>Whoops. Your search returned no results.</h3>";

    }

}


function filter(evt) {
    $('#posts').empty();
    posts = JSON.parse(localStorage.getItem("posts") || "[]");

    temp_posts = posts;

    //emptiest
    if(evt.target.value === "4") {
        temp_posts = temp_posts.sort(function(a,b) {
            return (Number(a.numPeople) > Number(b.numPeople)) ? 1 : ((Number(a.numPeople) < Number(b.numPeople)) ? -1 : 0);
        });

    }

    //fullest
    else if(evt.target.value === "3") {
        temp_posts = temp_posts.sort(function(a,b) {
            return (Number(a.numPeople) < Number(b.numPeople)) ? 1 : ((Number(a.numPeople) > Number(b.numPeople)) ? -1 : 0);
        });

    }

    //latest starting time
    else if(evt.target.value === "1") {
        temp_posts = temp_posts.sort(function(a,b) {

            var dateA = (a.startTime).split(" ")[0];
            var monthA = dateA.split("/")[0];
            var daysA = dateA.split("/")[1];
            var yearA = dateA.split("/")[2];


            var timeA = (a.startTime).split(" ")[1];
            var hoursA = timeA.split(":")[0];
            var minutesA = timeA.split(":")[1];
            var ampmA = (a.startTime).slice(-2);

            var dateB = (b.startTime).split(" ")[0];
            var monthB = dateB.split("/")[0];
            var daysB = dateB.split("/")[1];
            var yearB = dateB.split("/")[2];


            var timeB = (b.startTime).split(" ")[1];
            var hoursB = timeB.split(":")[0];
            var minutesB = timeB.split(":")[1];
            var ampmB = (b.startTime).slice(-2);

            if(yearA != yearB) {
                return yearA - yearB;
            }
            else if (monthA != monthB) {
                return monthA - monthB;
            }
            else if (daysA != daysB) {
                return daysA - daysB;
            }

            else if (hoursA != hoursB) {

                if(ampmA == ampmB) {

                  if(ampmA == "PM") {
                      return hoursB - hoursA;
                  }
                  return hoursA - hoursB;

                }

                else {
                    if(ampmA == "PM") {
                        return hoursB - hoursA;
                    }

                    return hoursA - hoursB;
                }
            }

            else if (minutesA != minutesB) {
                return minutesA - minutesB;
            }

            else {
                return 0;
            }


        });
    }

    //earliest starting time
    else if(evt.target.value === "2") {
        temp_posts = temp_posts.sort(function(a,b) {

            var dateA = (a.startTime).split(" ")[0];
            var monthA = dateA.split("/")[0];
            var daysA = dateA.split("/")[1];
            var yearA = dateA.split("/")[2];


            var timeA = (a.startTime).split(" ")[1];
            var hoursA = timeA.split(":")[0];
            var minutesA = timeA.split(":")[1];
            var ampmA = (a.startTime).slice(-2);

            var dateB = (b.startTime).split(" ")[0];
            var monthB = dateB.split("/")[0];
            var daysB = dateB.split("/")[1];
            var yearB = dateB.split("/")[2];


            var timeB = (b.startTime).split(" ")[1];
            var hoursB = timeB.split(":")[0];
            var minutesB = timeB.split(":")[1];
            var ampmB = (b.startTime).slice(-2);

            if(yearA != yearB) {
                return yearB - yearA;
            }
            else if (monthA != monthB) {
                return monthB - monthA;
            }
            else if (daysA != daysB) {
                return daysB - daysA;
            }

            else if (hoursA != hoursB) {

                if(ampmA == ampmB) {

                  if(ampmA == "PM") {
                      return hoursA - hoursB;
                  }
                  return hoursB - hoursA;

                }

                else {
                    if(ampmA == "PM") {
                        return hoursA - hoursB;
                    }

                    return hoursB - hoursA;
                }
            }

            else if (minutesA != minutesB) {
                return minutesB - minutesA;
            }

            else {
                return 0;
            }

        });
    }

    //most recent posts
    else if(evt.target.value === "0") {
        temp_posts.reverse();
    }

    temp_posts.forEach(function(post) {
      if(post.userList.includes(localStorage.getItem("currUser"))) {
        addNewPost(post, true);
      }
      //  addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description);
    });

}
