
function welcome() {
     
        //displaying details on welcome page

        // Retrieve the JSON string
        var jsonString = localStorage.getItem("user_details");
                
        // Parse the JSON string back to JS object
        var retrievedObject = JSON.parse(jsonString);

        //console.log(retrievedObject)

        var element = document.getElementById("Welcome_name");
        element.innerHTML = retrievedObject.name;

        var element2 = document.getElementById("Welcome_email");
        element2.innerHTML = retrievedObject.email;


        var element3 = document.getElementById("Welcome_number");
        element3.innerHTML = retrievedObject.contact_number;

        var element4 = document.getElementById("Welcome_username");
        element4.innerHTML = retrievedObject.username;

        console.log("Details are");
        console.log(retrievedObject);
}