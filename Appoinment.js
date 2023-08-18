document.addEventListener("DOMContentLoaded", function () {
    var bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var date = document.getElementById("date").value;
        var  time = document.getElementById("time").value;

        // You can implement further logic here, such as sending the appointment details to a server or saving them in a database.

        alert(`Appointment booked for ${date} at ${time}`);
        bookingForm.reset();
    });
});
