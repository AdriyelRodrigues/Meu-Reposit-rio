function fatorial(numero){
    if(isNaN(numero) || numero < 0){
        alert("Digite um número natural!");
        return numero;
    }
    if(numero < 2){
        return 1;
    }
        let fat = numero;
        for(let i=2; i<numero; i++){
            fat *= i;
    
        }
        console.log("O fatorial de " + numero + " é  " + fat)
        return fat;
        
    }
   

function resposta(continua){

    console.log("Quer continuar o programa?");
    let resp = prompt("Sim ou não?");
    if(resp ==="S" || resp ==="s" || resp === "Sim"){
        continua = true;
    }
    else if(resp ==="N" || resp === "n" || resp === "Nao"){
        continua = false;
    }
    return continua;
}

function main(){
    let numero;
    let continuaPrograma = true;

    while(continuaPrograma){

        numero = prompt("Digite um número!");
        fatorial(numero);
        continuaPrograma = resposta(continuaPrograma);

    }
}
main();