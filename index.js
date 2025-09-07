// 1. Hay algun numero mayor que 8?.
const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9,100, 8, 99];

// const filtrar = lista.some(n => n > 8 );
// if (filtrar == true){
//     console.log("Hay numeros mayores a 8")
// }else{
//     console.log("No hay numeros mayores a 8")
// } FORMA PARA HACERLO CON SOME AHORA VOY A INTENTARLO CON FILTRER


// const filtrar= lista.filter(n => n > 8);
// console.log(`Los numeros mayores a 8 son ${filtrar}`)
// FORMA DE HACERLO CON FILTER 

// ¿Todos los números son mayores que 0?. 
// const mayorCero = lista.every(n=> n > 0)
// console.log(mayorCero)

// const mayorCero = lista.filter(n=> n >0);
// console.log(`Existen numeros mayores a 0, los cuales son ${mayorCero}`)
// const mayoresACero = lista.filter(n => n > 0 );
// if (mayoresACero.length > 0 ){
//     console.log(`Si existen numeros mayores a 0 y son ${mayoresACero}`)
// }else{
//     console.log(`No existen numeros mayores a 0`)
// } DOS FORMAS DE HACERLO CON FILTER, CON CONDICION Y SIN CONDICION 



// Buscar solo con los números pares donde se espera que la salida sea: [4, 2, 8, 6, 10]. 


// const pares = lista.filter((n)=> n % 2 === 0 && n <= 10);

// console.log(pares)




// Calcular el cuadrado de cada número. Salida esperada: [16, 1, 4, 16, 25, 64, 49, 36, 81, 100,
// 9]. 


// const cuadrado= lista.map (n=> n *n)
// console.log(cuadrado)


// Obtener los > 3 y luego verifica si son todos pares. 

// const MayoresQueTres = lista.filter (n=> n > 3);
// console.log(MayoresQueTres)
// const pares= MayoresQueTres.filter(n=> n % 2 == 0);
// console.log(`Los pares mayores a 3 son: ${pares}`)


// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Elimina del array (sobre una copia) todos los números mayores que 6.
// Genera un array de textos “par”/“impar” según cada número. Para ello deberás usar un map con un
// condicional. Salida esperada:
// ["par","impar","par","par","impar","par","impar","par","impar","par"]. 

const mayorSeis= lista.filter(n=> n <= 6);
const parImpar= mayorSeis.map(n =>  {
    if (n % 2 === 0 ){
        return "Par";
    }else{
        return "Impar";
    }
});
console.log(parImpar)


// Dada la estructura de datos const arr = [3,6,6,7,12,10,4,13,1]; se pide solo utilizar el método filter: Crear
// una función flecha “anónima” que filtre los números mayores o iguales a 10.
// Luego pasar esta función al método filter y luego aplicar otro filtro para obtener solo los pares. 


const arr = [3,6,6,7,12,10,4,13,1];
const anonimo = arr.filter(n => n >= 10);
const par = anonimo.filter(num => num % 2 == 0 );
console.log(`Los pares mayores de 10 son : ${par}`);


// Dado la estructura de datos:
// se pide: Clonar con map (p. ej., const copia = lista.map(x => x)), luego del clon, mostrar los
// números que son menores o iguales a 10 y remplaza a los > de 10 por una “X”. Una ayudita!

const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
const copia = Numbers.map( x=> {
    if (x >= 10){
        return "X";
    }else{
        return x
    }
});
console.log(copia)
// O SE PUEDE HACER ASI 

const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
const copia = Numbers.map( x=> x >= 10 ? "x" : x);
console.log(copia)

