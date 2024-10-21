const form = document.getElementById('pet-suggestion-form');
const petSuggestionsDiv = document.getElementById('pet-suggestions');

window.addEventListener('DOMContentLoaded', () => {
    appendPet();
});

function appendPet() {
    const petsContainer = document.getElementById('adopt-carosual');
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    console.log(pets);
    
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('suggest');
        petCard.setAttribute("name", `${pet.type}-${pet.lifeStyle}-${pet.living}`);
        const img = document.createElement('img');
        img.src = pet.photo ;
        img.alt = `${pet.name} and ${pet.petName} pet Image`;
        img.classList.add('petImg')
        const div = document.createElement('div');
        // name
        const flexDivName = document.createElement('div');
        flexDivName.classList.add('flexDiv')
        const pName = document.createElement('p');
        pName.innerText = 'Name: ';
        const spanName = document.createElement('span');
        spanName.innerText = pet.name;
        flexDivName.append(pName)
        flexDivName.append(spanName)
        // age
        const flexDivAge = document.createElement('div');
        flexDivAge.classList.add('flexDiv')
        const pAge = document.createElement('p');
        pAge.innerText = 'Age: ';
        const spanAge = document.createElement('span');
        spanAge.innerText = pet.age;
        flexDivAge.append(pAge)
        flexDivAge.append(spanAge)
        // breed
        const flexDivBreed = document.createElement('div');
        flexDivBreed.classList.add('flexDiv')
        flexDivBreed.id  = 'breed'
        const pBreed = document.createElement('p');
        pBreed.innerText = 'Breed: ' ;
        const spanBreed = document.createElement('span');
        spanBreed.innerText = pet.breed;
        flexDivBreed.append(pBreed)
        flexDivBreed.append(spanBreed)
        // person
        const flexDivDesc = document.createElement('div');
        flexDivDesc.classList.add('flexDiv')
        const pDesc = document.createElement('p');
        pDesc.innerText = 'Personality: ' ;
        const spanDesc = document.createElement('span');
        spanDesc.innerText = pet.description ;
        flexDivDesc.append(pDesc)
        flexDivDesc.append(spanDesc)

        div.append(flexDivName)
        div.append(flexDivAge)
        div.append(flexDivBreed)
        div.append(flexDivDesc)

        petCard.append(img);
        petCard.append(div);
        petsContainer.append(petCard);
    });

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lifestyle = document.getElementById('lifestyle').value; // active || lazy 
    const livingSituation = document.getElementById('living-situation').value; // dept || house 
    const petPreferences = document.getElementById('pet-preferences').value; // cat || dog

    let filter = petPreferences + '-' + lifestyle + '-' + livingSituation;
    const results = document.getElementsByName(filter)
    const pets = document.querySelectorAll('div.suggest');
    pets.forEach((res) => { 
        res.style.display = 'none'
    })

    if (results.length > 0) { 
        results.forEach((res) => { 
            res.style.display = 'block'
        })
        document.getElementById('noSuggestP').style.display = 'none';
    }
    else { 
        document.getElementById('noSuggestP').style.display = 'block';
    }
});