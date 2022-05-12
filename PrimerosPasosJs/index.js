const { sumar } = require('./opracion')

let a = 10
let b = 2 

const person = {
    nombre:"Daniel",
    edad: 20,
    sexo: "M"
}

// destructuring

const {nombre, edad, sexo } = person;


console.log(sumar(a , b));

console.log(nombre, edad)

console.log(`El señor ${nombre} de la edad ${edad} es de sexo ${sexo}`)



/// Using array functions

const { getParNumbers } = require('./operaciones');

console.log('Hola Mundo');

const name = 'Daniel';
let lastName = 'Marin';

getParNumbers(numbers);

// Using find function
const numberExists = number.find(number => number === 100);
console.log(numberExists);


// learning null attributes
let student;
console.log(student);

student = null;

console.log(student);


// Using filter function 
console.log('--------------------------');
let parNumbers = numbers.filter(number => number % 2 === 0);
console.log(parNumbers);

parNumbers = number.filter(number => number >150);
console.log(parNumbers);


console.log('--------------------------');

const profesores = [{ nombre: 'Pedro', edad: 33, sexo: 'M'},
{ nombre: 'Maria', edad: 25, sexo: 'F'},{ nombre: 'Juan', edad: 28, sexo: 'M'}]
console.log(profesores);
const nuevoProfesores = profesores.map (prof => {
    if (prof.sexo !== 'F'){
        prof.cursos = ['LM','P1','P2'];
    }
    return prof;
});

console.log(nuevoProfesores);
console.log('------------------');

const imprimir = (parametro) => {
    console.log(parametro);
}

const multiplicar = (num1, num2, callBack) => {
    const resp = num1 * num2;
    callBack(resp);
}

multiplicar(5, 4, imprimir);