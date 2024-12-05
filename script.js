// const userName=prompt("Enter your Name ")

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Welcome, ${email}! You have successfully signed in.`);
    } else {
        alert('Please fill in both fields.');
    }
});
