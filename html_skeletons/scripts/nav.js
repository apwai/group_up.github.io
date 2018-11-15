function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toProfile() {
  //we will need to modify this method later when we get more users in the system - VK
  location.href = './profile.html';
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

function addNewPost(actName, startDate, endDate, numPeople, address, description, id, numJoined, checkJoin) {
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
      +      "<button type='button' class='close' data-dismiss='modal'>&times;</button>"
      +      "<h5 class='modal-title'>" + actName + "</h5>"
      +    "</div>"
      +    "<div class='modal-body'>"
      + "<div class = 'popupInfo'>"
      + startDate + " - " + endDate + "<br/>"
      +  address + "<br/>"
      + numJoined + "/" + numPeople + " spots filled<br/>" //will need to fix this when changing how many people have joined
      + description + "<br/> </div>"
      +    "</div>"
      +    "<div class='modal-footer'>"
      +      buttonString
      +      "<button type='button' class='btn btn-info' onclick='toProfile()'>See Host Profle</button>"
      +      "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
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
          addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, true);
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

    if((post.actName).includes(search)) {
      if(post.userList.includes(currUser)) {
        addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, true);
      }
      else {
        addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, false);
      }
      num++;
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

  if(evt.target.value === "4") {
      temp_posts = temp_posts.sort(function(a,b) {
          return (Number(a.numPeople) > Number(b.numPeople)) ? 1 : ((Number(a.numPeople) < Number(b.numPeople)) ? -1 : 0);
      });

  }

  else if(evt.target.value === "3") {
      temp_posts = temp_posts.sort(function(a,b) {
          return (Number(a.numPeople) < Number(b.numPeople)) ? 1 : ((Number(a.numPeople) > Number(b.numPeople)) ? -1 : 0);
      });

  }

  temp_posts.forEach(function(post) {
    if(post.userList.includes(currUser)) {
      addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, true);
    }
    else {
      addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description, post.id, post.numJoined, false);
    }  });

}
