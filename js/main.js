
// let nombre= "abraham"

// function letras_rep() {
//     for (let index = 0; index < nombre.length; index++) {
//         let caracter = nombre.charAt(index);
//         for (let contador=0; contador < nombre.length; contador++) {
//             let caracter2 = nombre.charAt(contador);
//             if (caracter == caracter2) {
//                 console.log(caracter);
                
//             }
//         }
       
//     }
// }

// letras_rep (nombre);

let nombre = "Abraham"
nombre = nombre.toUpperCase();
let letra="";
let conFinal =0;


for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp= 1;
    for (let cont = index+1; cont < nombre.length; cont++) {
        if (nombre.charAt(index)==nombre.charAt(cont)) {
            contTemp++;
        }
    }
    if (contTemp>conFinal) {
        conFinal=contTemp
        letra = nombre.charAt(index)
        
    }   
}
console.log(letra, conFinal);