
function contaLivrosPorCategoria(livrosPorCategoria){
    let objQtd ={};
    for(let i = 0; i < livrosPorCategoria.length; i++){
        let qtdPorCategoria = 0;
        let categoria = livrosPorCategoria[i].category; 
        for (let j = 0; j < livrosPorCategoria[i].books.length;j++){
            qtdPorCategoria += 1;
        }
        objQtd[categoria] = qtdPorCategoria;
        console.log(`Categoria ${categoria} possui ${qtdPorCategoria} livros.`);
    }
    return objQtd;
}

function main(){

    const booksByCategory = [
        {
            category: "Romance",
            books: [
                {
                    title: "O Sol Também é Uma Estrela",
                    author: "Nicola Yoon",
                },
                {
                    title: "O Noivo da Minha Melhor Amiga",
                    author: "Emily Giffin",
                },
                {
                    title: "Orgulho e Preconceito",
                    author: "Jane Austen",
                },
            ],
        },
        {
            category: "Fantasia",
            books: [
                {
                    title: "Harry Potter e a Pedra Filosofal",
                    author: "J.K. Rowling",
                },
                {
                    title: "O Hobbit",
                    author: "J.R.R. Tolkien",
                },
                {
                    title: "Eragon",
                    author: "Christopher Paolini",
                },
                {
                    title: "O Nome do Vento",
                    author: "Patrick Rothfuss",
                },
            ],
        },
        {
            category: "Suspense",
            books: [
                {
                    title: "A Garota no Trem",
                    author: "Paula Hawkins",
                },
                {
                    title: "O Silêncio dos Inocentes",
                    author: "Thomas Harris",
                },
            ],
        },
        {
            category: "Ficção Científica",
            books: [
                {
                    title: "Duna",
                    author: "Frank Herbert",
                },
                {
                    title: "Neuromancer",
                    author: "William Gibson",
                },
                {
                    title: "Fundação",
                    author: "Isaac Asimov",
                },
                {
                    title: "1984",
                    author: "George Orwell",
                },
                {
                    title: "O Fim da Infância",
                    author: "Arthur C. Clarke",
                },
            ],
        },
    ];
    qtd = contaLivrosPorCategoria(booksByCategory);
}



main();