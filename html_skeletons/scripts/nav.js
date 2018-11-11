function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openEvent(index) {
    document.getElementById("postNumber" + index).style.display = "block";
}

function closeEvent(index) {
    document.getElementById("postNumber" + index).style.display = "none";
}

function toProfile() {
  //we will need to modify this method later when we get more users in the system - VK
  location.href = './profile.html';
}

function addNewPost(actName, startDate, endDate, numPeople, address, description) {


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

    cell.innerHTML = "<div class='event-popup' id='postNumber" + index + "'> <center>"
    + actName + "<br/>"
    + startDate + " to <br/>"
    + endDate + "<br/>"
    + address + "<br/>"
    + "0/" + numPeople + " spots filled<br/>" //will need to fix this when changing how many people have joined
    + description + "<br/>"
    + "<button onclick = 'toProfile()'> Bob Chen </button><button type='submit' class='btn'>Unjoin Event</button><button type='submit' class='btn cancel' onclick='closeEvent(" + index + ")'>Close</button></center></div>" + "<button class = 'eventsButton' onclick='openEvent(" + index + ")'>" + actName + "<br/>" + address + "<br/>" + startDate + "<br/> </button>";


    cell.width = 225;
    cell.height = 225;


    posts = JSON.parse(localStorage.getItem('posts') || "[]");
    posts.push({actName: name, startTime: startDate, endTime: endDate, numPeople: numPeople, address: address, description: description});
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
    posts.forEach(function(post) {
        
      if(post.creator == localStorage.getItem('currUser')) {
        addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description);
      }
    });
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
        addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description);
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

  temp_posts = posts

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
      addNewPost(post.actName, post.startTime, post.endTime, post.numPeople, post.address, post.description);
  });

}
