function esPar(n){
    return n % 2 === 0 ? `${n} Es par`:`${n} Es impar`;
}

function CompararN(n1, n2){
    if (n1>n2){
        return `${n1} Es mayor que ${n2}`;
    } else if (n1 < n2){
        return `${n2} Es mayor que ${n1}`;
    } else {
        return `${n1} y ${n2} son iguales`;
    }
}

function Multiplo5(n){
    return n % 5 === 0 ? `${n} Es múltiplo de 5`:`${n} No es múltiplo de 5`;
}

function imprimirNumeros(n){
    for (let i = 0; i <= n; i++){
        console.log(i);
    }
}

function imprimirPalabras(palabra, cantidad) {
    const palabras = [];
    for (let i = 0; i < cantidad; i++) {
        palabras.push(palabra);
    }
    return palabras;
}

function imprimirArray(array){
    for (const k of array){
        console.log(k);
    }
}

function imprimirSinQuinto(array){
    for (let i = 0; i < array.length; i++){
        if (i!==4){
            console.log(array[i]);
        }
    }
}

function multiArrayPorNum(array,n){
    for (const k of array){
        console.log(k*n);
    }
}