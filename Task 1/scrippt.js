function formLoginValidate(event) {
    event.preventDefault(); 

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (!email || email.indexOf('@') === -1) {
        alert('Please enter a valid email address');
        return;
    }

    
  
  
    alert('login successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;


        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }

    
        if (email.indexOf('@') === -1) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        
        alert('Form submitted successfully!');
    
    });
});

