let fila = [];

function main(fila) {
    
    console.clear();
    console.log("Menu de Atendimento");
    console.log("1 - Novo Cliente");
    console.log("2 - Atender Cliente");
    console.log("3 - Sair");
    console.log("-------------------");

    if(fila.lenght == 0){
        console.log("Fila esta vazia");
    }
    else{
        console.log("Clientes na fila no momento");
        for(let i = 0; i<fila.length;i++){
            console.log(`Cliente ${i+1} : ${fila[i]} \n`);
        }
    }
    let opcao = prompt("Escolha a opção 1,2 ou 3 :");
    processarOpcao(opcao);
}
function adiciona(fila) {
    let nome = prompt("Digite o nome a ser inserido:");
    fila.push(nome);  
    console.log(`${nome} foi adicionado à lista.`);
    voltaAoMenu(fila);  
}

function atenderCliente(fila){
    if(fila.length === 0){
        console.log("A fila esta vazia.");
    }
    else{
        let clienteAtendido = fila.shift();
        console.log(`Atendendo ${clienteAtendido}`);
    }
    voltaAoMenu(fila);
}

function voltaAoMenu(fila){
    console.log("Voltando ao menu");
    main(fila);
}
function processarOpcao(opcao) {
    if (opcao === "1") {
        adiciona(fila);
    } else if (opcao === "2") {
        atenderCliente(fila);
    } else if (opcao === "3") {
        console.log("Saindo do sistema. Até logo!");
    } else {
        console.log("Opção inválida. Tente novamente.");
        voltaAoMenu(fila);
    }
}

main(fila);