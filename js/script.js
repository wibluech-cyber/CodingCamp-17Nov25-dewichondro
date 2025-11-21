welcomeMessage();

///Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    ///Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    ///If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    ///Update the welcome message on the message
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";


    /// console.log("Welcome, " + userName + "!");

}

/// Function to validate the message form 
function validateForm() {

}