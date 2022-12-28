//const blogTitle = document.getElementsByTagName('h2');
const firstTitle = document.getElementById('shoes-item');
firstTitle.style.color = 'green';
firstTitle.style.textAlign = 'center';
firstTitle.innerText = 'My awesome shoes';
firstTitle.style.backgroundColor = 'salmon';
firstTitle.style.padding = '10px';
firstTitle.style.margin = '10px';


//add an article

const article = document.createElement('article');
article.classList.add('blog');

const h3 = document.createElement('h3');
h3.innerText = 'My awesome blog';
const p = document.createElement('p');
p.innerText = 'This is my first blog using javascript. Hope guys will enjoy.I am a noob coder.';

article.appendChild(h3);
article.appendChild(p);

// article.innerHTML = `
//   <h3>My awesome blog</h3>
//   <p>This is my first blog using javascript. Hope guys will enjoy.I am a noob coder.</p>
// `
// Find the parent of article

const blogSection = document.getElementById('stay');
blogSection.appendChild(article);

const blueButton = document.getElementById('btn-click');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
function changeBackground() {
    document.body.style.backgroundColor = 'red';
}


document.getElementById('btn-click').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
})

