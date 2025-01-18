function fibonacci(numero){
   if(numero == 0 || numero == 1){
    return numero;
   }
   else{
    
    return fibonacci(numero-2) + fibonacci(numero-1);
   }
}
function printaValor(numero){
    for(let i = 0; i<numero; i++){
        console.log(`fibonacci ${numero} = ${fibonacci(i)}` + "\n");
    }
}

function main(){

    let numero = parseInt(prompt("Digite um numero inteiro!"));
    printaValor(numero);
    let resp = fibonacci(numero);
    console.log(`fibonacci ${numero} = ${fibonacci(numero)}` + "\n");
    
}
main();