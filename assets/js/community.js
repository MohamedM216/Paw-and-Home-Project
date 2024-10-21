

window.addEventListener('DOMContentLoaded', () => {
    appendNews();
    appendEvents();
});

function appendNews() {
    const ul = document.querySelector('#news ul');
    let contents = JSON.parse(localStorage.getItem('contents')) || [];
    
    const news = contents.filter((e) => e.type === 'news')
    
    news.forEach((piece) => { 
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.innerText = piece.title;
        const p = document.createElement('p');
        p.innerText = piece.body
        li.append(h3)
        li.append(p);
        ul.append(li);
    });
}
function appendEvents() {
    const ul = document.querySelector('#events ul');
    let contents = JSON.parse(localStorage.getItem('contents')) || [];
    
    const news = contents.filter((e) => e.type === 'event')
    
    news.forEach((piece) => { 
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        h3.innerText = piece.title;
        const p = document.createElement('p');
        p.innerText = piece.body
        li.append(h3)
        li.append(p);
        ul.append(li);
    });
}