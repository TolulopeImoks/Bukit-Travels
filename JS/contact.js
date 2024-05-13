
function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat)
}

function validateContact(event) {
    event.preventDefault();
   

    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var dateTime = document.getElementById("dateTime").value;
    var message = document.getElementById("contactMessage").value;


    var contactNameError = document.getElementById("contactNameError");
    var contactEmailError = document.getElementById("contactEmailError");
    var dateTimeError = document.getElementById("dateTimeError");
    var messageError =
        document.getElementById("contactMessageError");

    // reset previous error message (either defaut or new)

    contactNameError.innerHTML = "";
    contactEmailError.innerHTML = "";
    dateTimeError.innerHTML = "";
    messageError.innerHTML = "";

    // validate Name

    if (name.trim() === "") {
        contactNameError.innerHTML = "Enter name";
        return;
    }

    // validate email

    if (email.trim() === "") {

        contactEmailError.innerHTML = "Enter your email";
        return;
    } else if (!isValidEmail(email)) {
        contactEmailError.innerHTML = "Invalid Email Address";
        return;
    }


    if (dateTime.trim() === "") {
        dateTimeError.innerHTML = "select date and time";
        return;
    }

    // validate message
    if (message.trim() === "") {
        messageError.innerHTML = "Message is required";
        return;
    }

    alert("You've submitted the Form")



}



