var config = {
  apiKey: "AIzaSyA2nj6p0kSsALodc5-hiy_HXQmSSf3AtWg",
    authDomain: "ultrasonicdeskmonitor.firebaseapp.com",
    databaseURL: "https://ultrasonicdeskmonitor.firebaseio.com",
    projectId: "ultrasonicdeskmonitor",
    storageBucket: "ultrasonicdeskmonitor.appspot.com",
    messagingSenderId: "678304956436"
};

firebase.initializeApp(config);
var db = firebase.database();



// READ REVEIWS

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/ultrasonic');

reviewsRef.on('child_added', (data) => {
  var li = document.createElement('li')
  li.id = data.key;
  li.innerHTML = reviewTemplate(data.val())
  reviews.appendChild(li);
});

reviewsRef.on('child_changed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.innerHTML = reviewTemplate(data.val());
});

reviewsRef.on('child_removed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.parentNode.removeChild(reviewNode);
});

reviews.addEventListener('click', (e) => {
  var reviewNode = e.target.parentNode



  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('ultrasonic/' + id).remove();
  }
});


function reviewTemplate({date, time, value}) {
  return `
  <div class="table">
    <div class="row header">
      <div class="cell" id="date">Date</div>
      <div class="cell" id="time">Time</div>
      <div class="cell" id="status">Status</div>
      <div class="cell" id="lastseen">Last Seen</div>
    </div>
      <div class="cell" id="date">${date}</div>
      <div class="cell" id="time">${time}</div>
      <div class="cell" id="status">${value}</div>
    </div>
  </div>
  `
};

// Page Load Animation
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
