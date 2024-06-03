document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();

    // Format the date and time as desired (e.g., YYYY-MM-DD HH:MM:SS)
    var formattedDateTime = currentDate.toISOString().slice(0, 19).replace('T', ' ');

    // Set the value of the hidden input field
    document.getElementById('form_timestamp').value = formattedDateTime;
    console.log(formattedDateTime);
});