// Retrieve the JSON string
var jsonString = localStorage.getItem("user_details");

// Parse the JSON string back to JS object
var retrievedObject = JSON.parse(jsonString);

//console.log(retrievedObject)

console.log("Details are");
console.log(retrievedObject);

var element = document.getElementById("Welcome_name");
element.innerHTML = retrievedObject.firstname;

var element1 = document.getElementById("Welcome_lastname");
element1.innerHTML = retrievedObject.lastname;

var element2 = document.getElementById("Welcome_email");
element2.innerHTML = retrievedObject.email;

var element3 = document.getElementById("Welcome_number");
element3.innerHTML = retrievedObject.contact_number;

var element4 = document.getElementById("Welcome_dob");
element4.innerHTML = retrievedObject.dob;

var element5 = document.getElementById("Welcome_city");
element5.innerHTML = retrievedObject.city;
