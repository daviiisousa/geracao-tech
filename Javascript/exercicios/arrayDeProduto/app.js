// id (número único)
// nome (string)
// preco (número)
// quantidade (número)

// Uma função para adicionar um novo produto.
// Uma função para remover um produto com base no id.
// Uma função para atualizar a quantidade de um produto.
// Uma função para listar todos os produtos no inventário.

const produtos = [
];

const form = document.getElementById("form");
const resposta = document.getElementById("resposta");
const inputProduto = document.getElementById("produtos");
const inputPreco = document.getElementById("preco");
const inputQuantidade = document.getElementById("qtd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = inputProduto.value;
  const preco = Number(inputPreco.value); 
  const qtd = Number(inputQuantidade.value); 

  addNovoProduto(nome, preco, qtd);

  console.log(produtos)

  inputProduto.value = "";
  inputPreco.value = "";
  inputQuantidade.value = "";
});

function addNovoProduto(nome, preco, qtd) {
  const produto = {
    nome: nome,
    preco: preco,
    quantidade: qtd,
  };

  resposta.innerHTML += `Produto: ${nome} <br> Preço: ${preco} <br> Quantidade: ${qtd} <br><br>`
  produtos.push(produto)
}








