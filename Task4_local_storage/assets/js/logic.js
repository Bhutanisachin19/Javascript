

document.getElementById("myButton1").onclick = function () {
    location.href = "signup.html";
};


document.getElementById("myButton2").onclick = function () {
    location.href = "login.html";
};



document.getElementById("myButton3").onclick = function () {
    location.href = "index.html";
};


//object 
var user_details = {
    name : "",
    contact_number : "",
    email : "",
    username: "",
    password: ""
};


//for form validation

function Validate_Signup(){

    var letters = /^[A-Za-z]+$/;
    var numericExpression = /^[0-9]+$/;

    var name1 = document.getElementById("sign_name").value ;

    //console.log(name1);

    var phone_no = document.getElementById("contact").value ;
    

     //to meet the req conditions of password
     var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    
     var pass = document.getElementById("pwd").value ;
 
 
     var regex = /^[A-Za-z0-9 ]+$/;
     var uname = document.getElementById("uname").value;

    var mailid = document.getElementById("email").value;
    var success = true;

    //inserting data into object
    user_details.contact_number = phone_no;
    user_details.name = name1;
    user_details.password = pass;
    user_details.username = uname;
    user_details.email = mailid;



    if(name1.match(letters))
    {}
    else
    {
        success = false;
        alert("Please fill correct name");
    }


    if(phone_no.match(numericExpression) && phone_no.length == 10)
    {}
    else
    {
        success = false;
        alert("Please fill correct phone number");
    }


    
 
     if(pass.match(decimal))
     {
     }
     else
     {  
        success = false;

         alert("Please make sure password is 8 to 16 chars long and must contain at least on capital and small letter, must contain at least one number and must container at least 1 special character).")
     }
 
 
     if(uname.match(regex))
     {
     }
     else
     {
        success = false;
         alert("Please Enter correct Username")
     }


     //string users data into local storage
     if(success)
     {
         //i.e if no error in validation   
         console.log(user_details);


         // Convert the  object into JSON string and save it into storage
         localStorage.setItem("user_details",JSON.stringify(user_details));
     }

}






function Validate_Login(){

   //to meet the req conditions of password
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    
    var pass = document.getElementById("pwd").value ;




    var regex = /^[A-Za-z0-9 ]+$/;
    var email = document.getElementById("email").value;

    var success = true;
    /*
    console.log("LOgin form form ");
    console.log(localStorage);
    */

    if(pass.match(decimal))
    {
    }
    else
    {   
        success = false;
        alert("Please make sure password is 8 to 16 chars long and must contain at least on capital and small letter, must contain at least one number and must container at least 1 special character).")
    }


    if(email.match(regex))
    {
    }
    else
    {
        success = false;
        alert("Please Enter correct Username")
    }


    if(success)
    {
        //user has entered data correctly
        //now we check the local strorage data

        // Retrieve the JSON string
        var jsonString = localStorage.getItem("user_details");
                
        // Parse the JSON string back to JS object
        var retrievedObject = JSON.parse(jsonString);

        //console.log(retrievedObject);


        if(email === retrievedObject.username && pass === retrievedObject.password)
        {
            console.log("Welcome User");
            window.location.href="WelcomePage.html";
            //alert("Welcome");
        }
        else
        {
            alert("Enter Corrct Details");
        }


    }
}