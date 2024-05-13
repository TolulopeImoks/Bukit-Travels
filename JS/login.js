
function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat)
}




function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    
    if (email.trim() === "") {

        emailError.innerHTML = "Enter your email";
        return;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid Email Address";
        return;
    }


    if (password.trim() === "") {
        passwordError.innerHTML = "Enter your password";
        return;
    } else if (password.length < 3) {
        passwordError.innerHTML = "Password can not be less than 3 characters";
        return;
    }


    alert("You've submitted the Form")



}


