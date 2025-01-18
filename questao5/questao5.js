function main(){
    let numero = parseInt(prompt("Digite um numero inteiro"));
    if(numero % 5 == 0 && numero % 3 == 0){
        console.log("FizzBuzz");
    }
    else{
        if(numero % 5 == 0){
            console.log("Buzz");
        }
        else{
            if(numero % 3 == 0){
                console.log("Fizz");
            }
        }
    }

}
main();