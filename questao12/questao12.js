function encontrarElementoUnico(arr) {
    let elementoUnico = 0;

    for (let i = 0; i < arr.length; i++) {
        elementoUnico ^= arr[i];
    }
    console.log("O elemento único é:", elementoUnico);
}

function main(){
    let numeros = [2, 3, 5, 4, 5, 3, 2]; 
    encontrarElementoUnico(numeros);
}

main();
