document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for choosing us! Let’s start planning your trip!');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can send this data to your server or display a thank you message
    alert(`Thank you, ${name}! We have received your message:\n"${message}"\nWe will get back to you at ${email}.`);

    // Optionally, clear the form
    this.reset();
});
