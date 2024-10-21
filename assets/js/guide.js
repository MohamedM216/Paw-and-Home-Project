window.addEventListener('DOMContentLoaded', () => {
    appendResource();
});

function appendResource() {
    const container = document.getElementById('resourcesContainer');
    let resources = JSON.parse(localStorage.getItem('resources')) || [];
    resources.forEach(resource => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.innerText = resource.title
        const p = document.createElement('p');
        p.innerText = resource.body
        article.append(h3)
        article.append(p)
        container.append(article);
    });
}