document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show the confirmation message
    document.getElementById("confirmationMessage").style.display = "block";

    // Hide the confirmation message after 2 seconds
    setTimeout(function() {
        document.getElementById("confirmationMessage").style.display = "none";
    }, 2000);
});
