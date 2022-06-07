function main() {
    /* ***** Metodo Permutar */
    console.log(`"***** TALLER DE JAVASCRIPT ****** 
               \n ********************************"`);
    console.log("Funcion Permutar");
    let array = [1,2]; 
    console.log(permutar(array));

    /******** Metodo Cuenta ************* */
    console.log(" ********************************");
    console.log("Funcion Cuenta");
    console.log(cuenta(10));


    /* ********* Metodo Validar ********** */
    console.log(" ********************************");
    console.log("Funcion Validar");
    let numero = 10;
    console.log(`El numero ${numero} es: `,validar(numero));

    
}


/*  ********* Función Permitar ********************** */
const  permutar = (array) =>{
    let n  = array.length;
    let result = [];
    
    if(n<2){
        result = [...array];
    }else if(n===2) {
        result = [array[0], array[1], array[1], array[0]];
    }else{
        for(let i = 0; i < n; i++){
            let subArray = [...array];
            subArray.splice(i, 1);
            let subResult = permutar(subArray);
            for(let j = 0; j < subResult.length; j++){
                result.push(array[i]);
                result.push(subResult[j]);
            }
        }
    }
    return result;
}

/* **************** Función Cuenta ********************* */
const cuenta = (numero) => {
    let result = 0;
    for(let i = 0; i < numero; i++){
        console.log(result);
        result += i;
    }
    return result;
}

/* ****************** Funcion Validar Numero ************  */
const validar = (numero) => {
    if(numero > 0){
        return 'Positivo';
    }else{
        return 'Negativo';
    }
}


// 
main();