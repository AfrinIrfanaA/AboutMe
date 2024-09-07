


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
    } else {
        message.textContent = "Registration successful!";
        message.style.color = "green";
        
        alert(`Registration Details:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile Number: ${mobile}\nPassword: ${password}`);
    }
});
