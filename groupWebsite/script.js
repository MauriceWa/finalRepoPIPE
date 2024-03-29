document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    let password = document.getElementById('password').value;

    const passwords = {
        'password1': 'https://website1.com',
        '69': 'https://mauricewa.github.io/PortfolioPiPe/',
        'password3': 'https://website3.com'
    };

    if (password in passwords) {

        document.querySelector('.login-form').style.display = 'none';


        let welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = "<h2>Gefeliciteerd voor het halen van de puzzel!</h2>";
        document.body.insertBefore(welcomeMessage, document.body.firstChild);


        document.querySelector('.unlocked-button').style.display = 'block';
    } else {
        alert('Incorrect password');
    }
});
