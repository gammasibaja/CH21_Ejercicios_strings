// let nombre2= "Gamaliel";

// function reversa (){
//     let resultado ="";
//     for (let index = nombre2.length; index >=0; index--) {
//         resultado += nombre2[index];
//     }
//     return resultado;
// }

// reversa (nombre2);

function reves(str) {
    let tmpStr ="";
    for (let indice = str.length-1 ; indice >= 0; indice--) {
        tmpStr += str.charAt(indice)
        
    }
    return tmpStr;
    
}

function esPalindromo(str) {
    let res = false;
    str = str.toLowerCase ();
    if (reves(str)==str){
        res = true;
    }
    return res;
}