let time = [];

function adicionarJogador() {
    let nome = prompt("Digite o nome do jogador:");
    let idade = parseInt(prompt("Digite a idade do jogador:"));
    let posicao = prompt("Digite a posição do jogador:");
    let pontuacao = parseInt(prompt("Digite a pontuação do jogador:"));
    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };
    time.push(jogador);
    console.log(`${nome} foi adicionado ao time.`);
    voltaAoMenu();
}

function buscarPorPosicao() {
    let posicao = prompt("Digite a posição que você quer buscar:");

    let jogadoresPosicao = time.filter(jogador => jogador.posicao.toLowerCase() === posicao.toLowerCase());

    if (jogadoresPosicao.length > 0) {
        console.log(`Jogadores na posição ${posicao}:`);
        jogadoresPosicao.forEach(jogador => {
            console.log(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}`);
        });
    } else {
        console.log(`Não há jogadores na posição ${posicao}.`);
    }
    voltaAoMenu();
}

function listarTime() {
    if (time.length === 0) {
        console.log("O time não tem jogadores.");
    } else {
        console.log("Jogadores no time:");
        time.forEach(jogador => {
            console.log(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
        });
    }
    voltaAoMenu();
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("O time não tem jogadores.");
    } else {
        let somaPontuacoes = time.reduce((acc, jogador) => acc + jogador.pontuacao, 0);
        let media = somaPontuacoes / time.length;
        console.log(`A pontuação média do time é: ${media.toFixed(2)}`);
    }
    voltaAoMenu();
}

function processarOpcao(opcao) {
    if (opcao === "1") {
        adicionarJogador();
    } else if (opcao === "2") {
        buscarPorPosicao();
    } else if (opcao === "3") {
        listarTime();
    } else if (opcao === "4") {
        calcularPontuacaoMedia();
    } else if (opcao === "5") {
        console.log("Saindo");
        return;
    } else {
        console.log("Opção inválida.");
        voltaAoMenu();
    }

}



function voltaAoMenu() {
    let opcao = prompt("Escolha uma opção: \n 1 - Adicionar jogador \n 2 - Buscar por posição \n 3 - Listar time \n 4 - Calcular pontuação média \n 5 - Sair");
    processarOpcao(opcao);
}

function main() {
    voltaAoMenu();
}

main();
