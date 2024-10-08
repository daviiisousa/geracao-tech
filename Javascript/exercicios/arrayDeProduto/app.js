// id (número único)
// nome (string)
// preco (número)
// quantidade (número)

const produtos = [
  
];

// Uma função para adicionar um novo produto.
// Uma função para remover um produto com base no id.
// Uma função para atualizar a quantidade de um produto.
// Uma função para listar todos os produtos no inventário.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputProduto = document.getElementById("produtos").value;
  const inputPreco = document.getElementById("preco").value;
  const inputQuantidade = document.getElementById("qtd").value;
  const resposta = document.getElementById("resposta");

  resposta.innerHTML = `
  produto: ${inputProduto}
  <br>
  quantidade: ${inputQuantidade}
  <br>
  preço: ${inputPreco}
  `;


  addNovoProduto(inputProduto);
  addNovoPreco(inputPreco);
  addNovoQuantidade(inputQuantidade);
  
});

function addNovoProduto(produto) {
    for(let i in produtos){
        produtos[i].nome = produto;
    }
}

function addNovoPreco(preco) {
    for(let i in produtos){
        produtos[i].preco = preco;
    }
}

function addNovoQuantidade(qtd) {
    for(let i in produtos){
        produtos[i].quantidade = qtd;
    }
}

console.log(produtos);
