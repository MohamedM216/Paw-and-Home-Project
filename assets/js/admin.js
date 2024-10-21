

document.addEventListener('DOMContentLoaded', () => {
    let password;

    while (true) {
        password = prompt('Enter Password of admin');
        console.log(password);

        if (password === 'admin123') { 
            console.log("correct");
            break;
        } else { 
            console.log("Incorrect password, try again.");
        }
    }

    
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let contents = JSON.parse(localStorage.getItem('contents')) || [];
    let resources = JSON.parse(localStorage.getItem('resources')) || [];

    const petForm = document.getElementById('pet-form');
    const userForm = document.getElementById('user-form');
    const contentForm = document.getElementById('content-form');
    const resourceForm = document.getElementById('resources-form');

    const petList = document.getElementById('pet-list');
    const userList = document.getElementById('user-list');
    const contentList = document.getElementById('content-list');
    const resourceList = document.getElementById('resource-list');
    
    petForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('pet-name').value;
        const age = document.getElementById('pet-age').value;
        const breed = document.getElementById('pet-breed').value;
        const description = document.getElementById('pet-description').value;
        const photo = document.getElementById('pet-photo').files[0];
        const type = document.getElementById('petType').value;
        const lifeStyle = document.getElementById('lifeStyle').value;
        const living = document.getElementById('living').value;
        const reader = new FileReader();
        reader.onload = function (e) {
            const newPet = {
                id: Date.now(),
                name,
                age,
                breed,
                description,
                photo: e.target.result,
                type,
                lifeStyle,
                living
            };
            pets.push(newPet);
            localStorage.setItem('pets', JSON.stringify(pets));
            renderPets();
            petForm.reset();
        };
        reader.readAsDataURL(photo);
    });

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('user-username').value;
        const email = document.getElementById('user-email').value;

        const newUser = {
            id: Date.now(),
            username,
            email
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        userForm.reset();
    });

    contentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('content-title').value;
        const type = document.getElementById('content-type').value;
        const body = document.getElementById('content-body').value;

        const newContent = {
            id: Date.now(),
            title,
            type,
            body
        };
        contents.push(newContent);
        localStorage.setItem('contents', JSON.stringify(contents));
        renderContents();
        contentForm.reset();
    });

    resourceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('resource-title').value;
        const body = document.getElementById('resource-body').value;

        const newResource = {
            id: Date.now(),
            title,
            body
        };
        resources.push(newResource);
        localStorage.setItem('resources', JSON.stringify(resources));
        renderResources();
        resourceForm.reset();
    });

    function renderPets() {
        petList.innerHTML = '';
        pets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.className = 'card';
            petCard.innerHTML = `
                <img src="${pet.photo}" alt="${pet.name}">
                <div>
                    <h3>${pet.name}</h3>
                    <p>Age: ${pet.age}</p>
                    <p>Breed: ${pet.breed}</p>
                    <p>${pet.description}</p>
                </div>
                <button onclick="editPet(${pet.id})">Edit</button>
                <button onclick="removePet(${pet.id})">Remove</button>
            `;
            petList.appendChild(petCard);
        });
    }

    function renderUsers() {
        userList.innerHTML = '';
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'card';
            userCard.innerHTML = `
                <div>
                    <h3>${user.username}</h3>
                    <p>Email: ${user.email}</p>
                </div>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="removeUser(${user.id})">Remove</button>
            `;
            userList.appendChild(userCard);
        });
    }

    function renderContents() {
        contentList.innerHTML = '';
        contents.forEach(content => {
            const contentCard = document.createElement('div');
            contentCard.className = 'card';
            contentCard.innerHTML = `
                <div>
                    <h3>${content.title}</h3>
                    <p>Type: ${content.type}</p>
                    <p>${content.body}</p>
                </div>
                <button onclick="editContent(${content.id})">Edit</button>
                <button id='remove' onclick="removeContent(${content.id})">Remove</button>
            `;
            contentList.appendChild(contentCard);
        });
    }

    function renderResources() {
        resourceList.innerHTML = '';
        resources.forEach(resource => {
            const resourceCard = document.createElement('div');
            resourceCard.className = 'card';
            resourceCard.innerHTML = `
                <div>
                    <h3>${resource.title}</h3>
                    <p>${resource.body}</p>
                </div>
                <button onclick="editResource(${resource.id})">Edit</button>
                <button id='remove' onclick="removeResource(${resource.id})">Remove</button>
            `;
            resourceList.appendChild(resourceCard);
        });
    }

    window.editPet = function (id) {
        const pet = pets.find(p => p.id === id);
        document.getElementById('pet-name').value = pet.name;
        document.getElementById('pet-age').value = pet.age;
        document.getElementById('pet-breed').value = pet.breed;
        document.getElementById('pet-description').value = pet.description;
        pets = pets.filter(p => p.id !== id);
        localStorage.setItem('pets', JSON.stringify(pets));
        renderPets();
    };

    window.removePet = function (id) {
        pets = pets.filter(pet => pet.id !== id);
        localStorage.setItem('pets', JSON.stringify(pets));
        renderPets();
    };

    window.editUser = function (id) {
        const user = users.find(u => u.id === id);
        document.getElementById('user-username').value = user.username;
        document.getElementById('user-email').value = user.email;
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
    };

    window.removeUser = function (id) {
        users = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
    };

    window.editContent = function (id) {
        const content = contents.find(c => c.id === id);
        document.getElementById('content-title').value = content.title;
        document.getElementById('content-type').value = content.type;
        document.getElementById('content-body').value = content.body;
        contents = contents.filter(c => c.id !== id);
        localStorage.setItem('contents', JSON.stringify(contents));
        renderContents();
    };

    window.removeContent = function (id) {
        contents = contents.filter(content => content.id !== id);
        localStorage.setItem('contents', JSON.stringify(contents));
        renderContents();
    };

    window.editResource = function (id) {
        const resource = resources.find(c => c.id === id);
        document.getElementById('resource-title').value = resource.title;
        document.getElementById('resource-body').value = resource.body;
        resources = resources.filter(c => c.id !== id);
        localStorage.setItem('resources', JSON.stringify(resources));
        renderResources();
    };

    window.removeResource = function (id) {
        resources = resources.filter(res => res.id !== id);
        localStorage.setItem('resources', JSON.stringify(resources));
        renderResources();
    };

    renderPets();
    renderUsers();
    renderContents();
    renderResources()
});

