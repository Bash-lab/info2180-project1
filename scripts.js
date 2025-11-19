/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        const email = emailInput.value.trim();
        messageDiv.innerHTML = ''; // Clear previous messages
        
        if (email === '') {
            // If no email is entered
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.style.color = '#fff';
            messageDiv.style.backgroundColor = '#e53e3e';
            messageDiv.style.padding = '10px';
            messageDiv.style.marginTop = '15px';
            messageDiv.style.borderRadius = '5px';
        } else {
            // If email is entered
            messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.color = '#fff';
            messageDiv.style.backgroundColor = '#48BB78';
            messageDiv.style.padding = '10px';
            messageDiv.style.marginTop = '15px';
            messageDiv.style.borderRadius = '5px';
            
            // Clear the input field
            emailInput.value = '';
        }
    });
});