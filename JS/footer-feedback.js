
function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat)
}




function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById("feedback_name").value;
    var email = document.getElementById("feedback_email").value;
    var message = document.getElementById("message").value;


    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("feedbackEmailError");
    var dateTime = document.getElementById("dateTimeError");
    var messageError =
        document.getElementById("messageError");

    // reset previous error message (either defaut or new)

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    // validate Name

    if (name.trim() === "") {
        nameError.innerHTML = "Enter name";
        return;
    }

    // validate email

    if (email.trim() === "") {

        emailError.innerHTML = "Enter your email";
        return;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid Email Address";
        return;
    }


    // validate message
    if (message.trim() === "") {
        messageError.innerHTML = "Message is required";
        return;
    }
   
    alert("You've submitted the Form")

   

}



