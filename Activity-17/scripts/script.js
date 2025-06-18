document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phoneNum = document.getElementById('phone').value;

    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username should be at least 5 characters long and contain only letters and numbers
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Simple email pattern check
    var passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password); // Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters
    var phoneNumValid = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}$/.test(phoneNum);

    document.getElementById('usernameFeedback').style.display = usernameValid ? 'none' : 'block';
    document.getElementById('emailFeedback').style.display = emailValid ? 'none' : 'block';
    document.getElementById('passwordFeedback').style.display = passwordValid ? 'none' : 'block';
    document.getElementById('phoneNumFeedback').style.display = phoneNumValid ? 'none' : 'block';

    document.getElementById('usernameFeedback').textContent = usernameValid ? '' : 'Username should be at least 5 characters long and contain only letters and numbers.';
    document.getElementById('emailFeedback').textContent = emailValid ? '' : 'Please enter a valid email address.';
    document.getElementById('passwordFeedback').textContent = passwordValid ? '' : 'Password should be at least 8 characters long, contain numbers and both lowercase and uppercase letters.';
    document.getElementById('phoneNumFeedback').textContent = phoneNumValid ? '' : 'Please enter a valid phone number (e.g., +1 (123) 456-7890)."';
    var formValid = usernameValid && emailValid && passwordValid && phoneNumValid;

    if (formValid) {
        document.getElementById('registrationFeedback').textContent = 'Your user registration was accepted!';
        document.getElementById('registrationFeedback').style.display = 'block';
        // Here you can also handle the form submission, e.g. send data to the server
    } else {
        document.getElementById('registrationFeedback').textContent = '';
        document.getElementById('registrationFeedback').style.display = 'none';
    }
});
