// Teniendo en cuenta la siguiente lista: 
// 1) Calcular la suma de todos los elementos de la lista usando únicamente reduce. 

// const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
// const suma= nums.reduce((accu,val) => accu + val, 0);
// console.log(suma)

// 2) Calcular la suma de los cuadrados de los números impares. 
// const suma= nums
// .filter( n=> n %2 != 0)
// .map(n => n*n)
// .reduce((accu,val) => accu + val)
// // const cuadrado= impares.map(num => num * num);
// // const suma = cuadrado.reduce((accu,val)=> accu + val);
// console.log(`La suma de los cuadrados impares es ${suma}`)

// 3) Teniendo en cuenta la siguiente lista de frases, deberás encontrar la frase más larga.
// const frases = [
//  "La tecnología cambia el mundo",
//  "Programar es crear soluciones",
//  "Aprender haciendo es aprender mejor",
//  "JavaScript es flexible y poderoso"
// ];

// const contar = frases.reduce((accu,val)=> {
//     if (accu.length < val.length){
//         return val;
//     }else{
//         return accu;
//     }
// });
// console.log(contar)


// Obtener del array “nums“, el mínimo y máximo de la lista en una sola pasada , retornando un objeto {min,
// max}
// Ayuda: El JavaScript existe un valor numérico especial denominado “Infinity”. Este tipo de numérico
// representa al infinito positivo, pero si le antepones un guión, pasará a ser un infinito negativo “-Infinity”.
// Entonces, podrías tomar como valor inicia lo siguiente {min: Infinity, max: -Infinity}. Esto se hace así porque
// cualquier número será menor que Infinity y cualquier número será mayos a –Infinity. 

// const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
// const min_max = nums.reduce((accu,val)=> {
//     if (val < accu.min) accu.min = val
//     if( val > accu.max) accu.max = val
//     return accu
// }, {min: Infinity, max: -Infinity});
// console.log(min_max)

// /////////////////////////////////

// 5) Dada una lista de notas {curso, nota}, devolvé {curso: promedio} sin recorrer dos veces (acumulá sumas y
// conteos en el mismo reduce).Entrada de ejemplo: 
















