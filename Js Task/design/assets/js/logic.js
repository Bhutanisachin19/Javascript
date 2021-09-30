//object
var user_details = {
  firstname: "",
  lastname: "",
  contact_number: "",
  email: "",
  city: "",
  dob: "",
  bio: "",
};

//for form validation

function Validate_Signup() {
  var letters = /^[A-Za-z]+$/;
  var numericExpression = /^[0-9]+$/;

  var name1 = document.getElementById("sign_name").value;
  var name2 = document.getElementById("sign_lastname").value;

  //console.log(name1);
  var phone_no = document.getElementById("contact").value;
  var mailid = document.getElementById("email").value;
  var dob = document.getElementById("DOB").value;
  var city = document.getElementById("City").value;
  var bio = document.getElementById("bio").value;

  var success = true;

  //inserting data into object
  user_details.contact_number = phone_no;
  user_details.firstname = name1;
  user_details.email = mailid;
  user_details.lastname = name2;
  user_details.dob = dob;
  user_details.city = city;
  user_details.bio = bio;

  //converting to number
  var year = dob.substring(0, 4);
  var int_year = parseInt(year);
  console.log(int_year);
  console.log(typeof int_year);

  if (2021 - int_year < 18) {
    success = false;
    alert("You are under age");
  }

  if (bio === "") {
    success = false;
    alert("Please fill bio correctly");
  }

  if (name1.match(letters)) {
  } else {
    success = false;
    alert("Please fill correct first name");
  }

  if (name2.match(letters)) {
  } else {
    success = false;
    alert("Please fill correct last name");
  }

  if (city.match(letters)) {
  } else {
    success = false;
    alert("Please fill correct city name");
  }

  if (phone_no.match(numericExpression) && phone_no.length == 10) {
  } else {
    success = false;
    alert("Please fill correct phone number");
  }

  //string users data into local storage
  if (success) {
    //i.e if no error in validation
    console.log(user_details);

    /*
    var year = user_details.dob.substring(0, 4);

    var int_year = parseInt(year);
    console.log(user_details.dob);
    console.log(year);
    */

    // Convert the  object into JSON string and save it into storage
    localStorage.setItem("user_details", JSON.stringify(user_details));
    window.location.href = "table.html";
  }
}

// created a seperate file for welcome function

// function welcome() {
//   console.log("Calling Welcome function ...........");

//   //displaying details on welcome page

//   // Retrieve the JSON string
//   var jsonString = localStorage.getItem("user_details");

//   // Parse the JSON string back to JS object
//   var retrievedObject = JSON.parse(jsonString);

//   //console.log(retrievedObject)

//   console.log("Details are");
//   console.log(retrievedObject);

//   var element = document.getElementById("Welcome_name");
//   element.innerHTML = retrievedObject.firstname;

//   var element1 = document.getElementById("Welcome_lastname");
//   element1.innerHTML = retrievedObject.lastname;

//   var element2 = document.getElementById("Welcome_email");
//   element2.innerHTML = retrievedObject.email;

//   var element3 = document.getElementById("Welcome_number");
//   element3.innerHTML = retrievedObject.contact_number;

//   var element4 = document.getElementById("Welcome_dob");
//   element4.innerHTML = retrievedObject.dob;

//   var element5 = document.getElementById("Welcome_city");
//   element5.innerHTML = retrievedObject.city;
// }
