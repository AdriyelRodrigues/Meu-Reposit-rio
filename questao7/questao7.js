function palindromo(texto){
    texto = texto.toLowerCase().replace(/[\W_]/g, "");
    for(let i = texto.length-1; i>0; i--){
        if(texto[i] != texto[texto.length-i-1]){
            return false;
        }
    }
    return true;
}

function main(){
    texto = prompt("Digite um texto!");
    console.log(`Esse texto é palindromo? ${palindromo(texto)}`);
}
main();