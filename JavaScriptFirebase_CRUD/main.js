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

// Timestamp
function reloadPage() {
    //var d = new Date();
    //var n = d.toLocaleString();
    //document.getElementById("Timestamp").innerHTML = n;
    location.reload();
}

// CREATE REWIEW

var reviewForm = document.getElementById('reviewForm');
var date   = document.getElementById('date');
var time    = document.getElementById('time');
var hiddenId   = document.getElementById('hiddenId');
var element = document.getElementById('element');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!date.value || !time.value || !element.value ) return null

  var id = hiddenId.value || Date.now()

  db.ref('ultrasonic/' + id).set({
    Date: date.value,
    Time: time.value,
    Value: element.value
  });

  date.value = '';
  time.value  = '';
  hiddenId.value = '';
  element.value = '';
});

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

  // UPDATE REVEIW
  if (e.target.classList.contains('edit')) {
    date.value = reviewNode.querySelector('.date').innerText;
    time.value  = reviewNode.querySelector('.time').innerText;
    hiddenId.value = reviewNode.id;
    element.value = reviewNode.querySelector('.element').innerText;
  }

  // DELETE REVEIW
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('ultrasonic/' + id).remove();
  }
});

// add both buttons for Full CRUD Functionality in reviewTemplate Function
// <button class='delete'>Delete</button>
// and <button class='edit'>Edit</button>

function reviewTemplate({date, time, value}) {
  return `
    <div class='date'>${date}</div>
    <div class='time'>${time}</div>
    <div class='value'>${value}</div>
  `
};
