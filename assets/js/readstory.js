const form = document.querySelector('form#readstoryForm');
const name = document.getElementById('name');
const petName = document.getElementById('pet-name');
const story = document.getElementById('story');
const imageFile = document.getElementById('imageFile');
// localStorage.clear()

window.addEventListener('DOMContentLoaded', () => {
    appendStory();
});

function appendStory() {
    const storyContainer = document.getElementById('story-grid');
    let stories = JSON.parse(localStorage.getItem('stories')) || [];
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        const img = document.createElement('img');
        img.src = story.image ;
        img.alt = `${story.name} and ${story.petName} Story Image`;
        img.classList.add('storyImg')
        const title = document.createElement('h3');
        title.textContent = `${story.name} and ${story.petName}`;
        const storyText = document.createElement('p');
        storyText.textContent = `"${story.story}"`;
        const textDiv = document.createElement('div');
        textDiv.classList.add('text')
        storyCard.appendChild(img);
        textDiv.appendChild(title)
        textDiv.appendChild(storyText)
        storyCard.appendChild(textDiv);
        storyContainer.appendChild(storyCard);
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!name.value) { 
        name.style.borderColor = "red";
        return;
    }
    if (!petName.value) { 
        petName.style.borderColor = "red";
        return;
    }
    if (!story.value) { 
        story.style.borderColor = "red";
        return;
    }

    const file = imageFile.files[0];
    if (!file) {
        alert("Please select an image file.");
        imageFile.style.borderColor = 'red';
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const base64String = event.target.result;

        let arr = [];
        if (localStorage.getItem('stories')) {
            arr = JSON.parse(localStorage.getItem('stories'));
        }
        
        let singleStory = {
            name: name.value,
            petName: petName.value,
            story: story.value,
            image: base64String,
        };

        arr.push(singleStory);
        localStorage.setItem('stories', JSON.stringify(arr));

        window.location.reload();

    };

    reader.readAsDataURL(file);
});
