// Get all product buttons
const products = document.querySelectorAll('.purchase-btn');

// Get modal elements
const modal = document.getElementById('confirmationModal');
const thankYouModal = document.getElementById('thankYouModal');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// When a product button is clicked, show the confirmation modal
products.forEach(product => {
    product.addEventListener('click', function() {
        modal.style.display = 'flex'; // Show the modal
    });
});

// If Yes is clicked, show the Thank You message and close the modal
confirmYes.addEventListener('click', function() {
    modal.style.display = 'none'; // Close the confirmation modal
    thankYouModal.style.display = 'flex'; // Show the Thank You modal

    // Hide the Thank You modal after 2 seconds
    setTimeout(() => {
        thankYouModal.style.display = 'none'; // Hide the Thank You modal
    }, 1000);
});

// If No is clicked
confirmNo.addEventListener('click', function() {
    modal.style.display = 'none'; 
});
