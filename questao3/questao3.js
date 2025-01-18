
function verificaIdades(idade, compara, nome){
        if( !Number.isInteger(idade)){
            console.log("Idade invalida");
            return idade;
        }
        if( idade < compara){
           console.log(`${nome}: Menor de idade`);
           return idade;
        }
        else{
            console.log(`${nome}: Maior de idade`)
            return idade;
        }
    }

function main(){
    let comparacao = parseInt(prompt("Digite a idade para comparacao!"));
    let qtd = parseInt(prompt("Digite a quantidade de pessoas!"));
    let i = 0;
    while(i < qtd){
        let nome = prompt(`Qual o nome da pessoa ${i+1} ?`);
        let idade = parseInt(prompt(`Qual a idade da pessoa ${i+1} ?`));
        verificaIdades(idade,comparacao,nome);
        i = i+1;
    }
    
}
main();