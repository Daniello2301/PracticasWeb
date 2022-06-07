const createParagraph = () => {
    const p = document.createElement('p');
    p.innerHTML = 'Hello World';
    document.body.appendChild(p);
}

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
}