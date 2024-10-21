const form = document.getElementById('main')
let users = JSON.parse(localStorage.getItem('users')) || [] ;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href ='http://127.0.0.1:5500/pages/index.html'
    localStorage.setItem('currUser', JSON.stringify(newUser));
});