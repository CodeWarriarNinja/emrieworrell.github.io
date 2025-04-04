//Loading
document.addEventListener('DOMContentLoaded', function () {

    // Add event listener for form submission
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Show the confirmation message
        var confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';

        // Reset the form
        document.getElementById('feedbackForm').reset();

        
        setTimeout(function() {
            confirmationMessage.style.display = 'none';
        }, 1000);
    });
});
