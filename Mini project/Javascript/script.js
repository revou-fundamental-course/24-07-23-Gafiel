const slider = document.querySelector('.slider');
let counter = 0;

function slide() {
  counter++;
  if (counter >= 3) {
    counter = 0;
  }
  slider.style.transform = `translateX(-${counter * 800}px)`;
}

setInterval(slide, 3000); // Auto slide every 3 seconds

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

