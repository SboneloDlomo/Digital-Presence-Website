// This is a JavaScript 
document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.getElementById('slideshow');
    const slides = slideshow.querySelectorAll('.product-slide');
    let currentSlide = 0;

    // Function to show the next slide
    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    // Show the first slide initially
    slides[currentSlide].style.display = 'block';

    // Set interval to automatically show the next slide every 3 seconds (adjust as needed)
    setInterval(showNextSlide, 3000);
})
function validateForm() {
    const name = document.getElementById('Name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^0[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name (Alphabets only)
    if (!name.match(nameRegex)) {
        alert('Please enter a valid name (alphabets only).');
        return false;
    }

    // Validate Surname (Alphabets only)
    if (!surname.match(nameRegex)) {
        alert('Please enter a valid surname (alphabets only).');
        return false;
    }

    // Validate Cellphone Number (Starts with 0, 10 digits)
    if (!phone.match(phoneRegex)) {
        alert('Please enter a valid cellphone number (starting with 0, 10 digits).');
        return false;
    }

    // Validate Email (Contains @ symbol)
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Other validations (Address, Description, etc.) can be added here if needed

    // If all validations pass, return true to submit the form
    return true;
};
