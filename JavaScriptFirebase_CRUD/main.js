var config = {
    apiKey: "",
    authDomain: "ultrasonicfirebase.firebaseapp.com",
    databaseURL: "https://ultrasonicfirebase.firebaseio.com",
    projectId: "ultrasonicfirebase",
    storageBucket: "ultrasonicfirebase.appspot.com",
    messagingSenderId: ""
  };

firebase.initializeApp(config);
var db = firebase.database();
var ultrasonicRef = db.ref('/ultrasonic');


// Last Snapshot Value of Ultrasonic 01 Database

ultrasonicRef.on('child_added', function(snapshot) {
  var lastSnap = snapshot.val();

  console.log("US01_updatedValue: " + lastSnap.US01);
  document.getElementById("Unit1").innerHTML = lastSnap.US01
  document.getElementById("date1").innerHTML = lastSnap.Date
  document.getElementById("time1").innerHTML = lastSnap.Time
});

// Last Snapshot Value of Ultrasonic 02 Database
ultrasonicRef.on('child_added', function(snapshot) {
  var lastSnap = snapshot.val();

//  console.log("US02_updatedValue: " + lastSnap.US02);
//  document.getElementById("Unit2").innerHTML = lastSnap.US02
//  document.getElementById("date2").innerHTML = lastSnap.Date
//  document.getElementById("time2").innerHTML = lastSnap.Time
});


// Page Load Animation
var myVar;
function pageLoad() {
  console.log('%c Loading Data....', 'background: #222; color: #bada55');
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  console.log("%c Data Loaded Successfully!", 'background: #222; color: #bada55');
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
