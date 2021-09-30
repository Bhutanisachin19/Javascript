


document.getElementById("myButton1").onclick = function () {
    location.href = "signup.html";
};

document.getElementById("myButton2").onclick = function () {
    location.href = "login.html";
};



document.getElementById("myButton3").onclick = function () {
    location.href = "index.html";
};



//for form validation

function Validate_Signup(){

    var letters = /^[A-Za-z]+$/;
    var numericExpression = /^[0-9]+$/;

    var name1 = document.getElementById("sign_name").value ;

    //console.log(name1);

    var phone_no = document.getElementById("contact").value ;
    

    /*
    console.log("SignUp form ");
    console.log(localStorage);
    */



    if(name1.match(letters))
    {}
    else
    {
        alert("Please fill correct name");
    }


    if(phone_no.match(numericExpression) && phone_no.length == 10)
    {}
    else
    {
        alert("Please fill correct phone number");
    }

}



function Validate_Login(){

   //to meet the req conditions of password
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    
    var pass = document.getElementById("pwd").value ;


    var regex = /^[A-Za-z0-9 ]+$/;
    var email = document.getElementById("email").value;


    /*
    console.log("LOgin form form ");
    console.log(localStorage);
    */

    if(pass.match(decimal))
    {
    }
    else
    {
        alert("Please make sure password is 8 to 16 chars long and must contain at least on capital and small letter, must contain at least one number and must container at least 1 special character).")
    }


    if(email.match(regex))
    {
    }
    else
    {
        alert("Please Enter correct Username")
    }
}