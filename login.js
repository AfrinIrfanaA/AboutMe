document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const Name = document.getElementById('Name').value;
    const password = document.getElementById('password').value;

    alert(`Login Details:\n\nName: ${Name}\nPassword: ${password}`);
});
