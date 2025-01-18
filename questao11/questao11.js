

function verificarOrdemCrescente(numeros) {
    let contador = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[i - 1]) {
            contador++; 
        }
    }
    console.log("A maior sequencia é " + contador);
    return contador;
}
function main() {
    let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Digite o número ${i+1} :`));
        numeros.push(numero);
    }
    let ordemCrescente = verificarOrdemCrescente(numeros);
}

main();
