/* for(let i = 0; i < 21; i++){
    const button = document.createElement('button');
    button.innerHTML = 'Click Me';
    button.addEventListener('click', () => {
        const p = document.createElement('p');
        p.innerHTML = `Parrafo ${i} `;
        document.body.appendChild(p);
    });
    document.body.appendChild(button);
} */


for(let i = 0; i < 21; i++){
    console.log(i)
}

const dias = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

for( let i = 0; i < dias.length; i++){
    console.log(dias[i]);
}

function permuteVector(vector){
    for(let i = 0; i < vector.length; i++){
        for(let j = 0; j < vector.length; j++){
            console.log(vector[i] + ' ' + vector[j]);
        }
    }
}

permuteVector(dias);


/* ****************************************************** */

let miImagen = document.querySelector('img');

miImagen.onclick = function(){
    let mySrc = miImagen.getAttribute('src');
    if(mySrc === '/image1.jpg'){
        miImagen.setAttribute('src', '/image2.jpg');
        console.log(miImagen.getAttribute('src'));
    }else{
        this.setAttribute('src', '/image1.jpg');
        console.log(miImagen.getAttribute('src'));
    }
}