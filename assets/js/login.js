const form = document.getElementById('main')
let users = JSON.parse(localStorage.getItem('users')) || [] ;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = false ;
    users.map((user) => { 
        if (email === user.email) { 
            if (password === user.password) { 
                valid = true ; 
                window.location.href ='http://127.0.0.1:5500/pages/index.html'
                console.log(user);
                localStorage.setItem('currUser', JSON.stringify(user) )
            }
        } 
    })
    if (!valid) { 
        alert("Email or Password isn't valid")
        
    }
});