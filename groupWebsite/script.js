document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    const passwords = {
        'password1': 'https://website1.com',
        '69': 'https://mauricewa.github.io/PortfolioPiPe/',
        'password3': 'https://website3.com'
    };

    if (password in passwords) {
        let welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = "<h2>Welcome " + username + "! to the new room</h2>";
        document.querySelector('.login-container').appendChild(welcomeMessage);

        // Show the unlocked button
        document.querySelector('.unlocked-button').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
});

// Function to be called when the unlocked button is clicked
function visitWebsite() {
    // You can implement the behavior when the unlocked button is clicked
    // For example, redirecting to the website associated with the password
    // You can use the passwords object to get the website URL
}
