// Initialize Firebase
var config = {
    apiKey: "AIzaSyBZF0itpV1o7IQdjb98VY2cGciOkwlbR6o",
    authDomain: "gt201802-gar.firebaseapp.com",
    databaseURL: "https://gt201802-gar.firebaseio.com",
    projectId: "gt201802-gar",
    storageBucket: "gt201802-gar.appspot.com",
    messagingSenderId: "850040482344"
};

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var email = "";
var rate = 0;

$('.btn-primary').on('click', function (event) {
    // event.preventDefault();

    //Capture User Inputs and store them into variables
    name = $("#input-name").val().trim();
    role = $("#input-role").val().trim();
    email = $("#input-email").val().trim();
    rate = $("#input-rate").val().trim();

    database.ref().push({
        name: name,
        role: role,
        email: email,
        rate: rate
    })


});