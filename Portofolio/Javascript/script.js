let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

showSlide(currentSlide);

function submitForm() {
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can perform further actions with the form data here, such as sending it to a server using AJAX

    // For this example, we'll just log the values in the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Return false to prevent the form from submitting and refreshing the page
    return false;
}

