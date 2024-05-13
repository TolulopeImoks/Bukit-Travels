
function validateBookings(event) {
    event.preventDefault();


    var from = document.getElementById("fromLocation").value;
    var departure = document.getElementById("departureDate").value;
    var to = document.getElementById("toLocation").value;
    var arrival = document.getElementById("arrivalDate").value;
    var trip = document.querySelector('input[name="flight-type"]:checked');



    var fromLocationError = document.getElementById("fromLocationError");
    var departureDateError = document.getElementById("departureDateError");
    var toLocationError = document.getElementById("toLocationError");
    var arrivalDateError = document.getElementById("arrivalDateError");
    var flightTypeError = document.getElementById("flightTypeError");



    // reset previous error message (either defaut or new)

    fromLocationError.innerHTML = "";
    departureDateError.innerHTML = "";
    toLocationError.innerHTML = "";
    arrivalDateError.innerHTML = "";
    flightTypeError.innerHTML = "";

    // validate Name

    if (from.trim() === "") {
        fromLocationError.innerHTML = "Enter location";
        return;
    }


    if (departure.trim() === "") {
        departureDateError.innerHTML = "Enter date";
        return;
    }
    // validate email


    if (to.trim() === "") {
        toLocationError.innerHTML = "Enter location";
        return;
    }

    if (arrival.trim() === "") {
        arrivalDateError.innerHTML = "Enter date";
        return;
    }


    if (!trip) {
        flightTypeError.innerHTML = "Select flight type";
        return;
    }





    alert("You've been booked")



}



