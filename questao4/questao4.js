function conversao_em_euro(reais){
    euro = reais/6.10;
    return euro;

}
function conversao_em_dolar(reais){
    dolar = reais/5.70;
    return dolar;
}

function main(){
    let valor_em_reais = parseFloat(prompt("Qual a quantia de dinheiro em reais?"));
    let valor_em_euros = conversao_em_euro(valor_em_reais);
    console.log("Esse é o valor em euros " + valor_em_euros);
    let valor_em_dolares = conversao_em_dolar(valor_em_reais);
    console.log("Esse e o valor em dolares " + valor_em_dolares)

}
main();