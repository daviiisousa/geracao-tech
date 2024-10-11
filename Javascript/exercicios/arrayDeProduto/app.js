const produtos = [];

const form = document.getElementById("form");
const resposta = document.getElementById("resposta");
const inputProduto = document.getElementById("produtos");
const inputPreco = document.getElementById("preco");
const inputQuantidade = document.getElementById("qtd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = inputProduto.value;
  const preco = Number(inputPreco.value).toFixed(2);
  const qtd = Number(inputQuantidade.value);

  if (nome === "" || preco <= 0 || qtd <= 0) {
    alert("Por favor, preencha os dados corretamente");
    return;
  }

  addNovoProduto(nome, preco, qtd);
  renderizarProdutos();

  console.log(produtos);

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

  produtos.push(produto);
}

function apagar(index) {
  produtos.splice(index, 1);
  renderizarProdutos();
}

function atualizar(index) {
  const valorNovo = Number(prompt('Digite uma nova quantidade'));

  if (isNaN(valorNovo) || valorNovo <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  produtos[index].quantidade = valorNovo;

  renderizarProdutos();
}


function renderizarProdutos() {
  resposta.innerHTML = "";

  produtos.forEach((produto, index) => {
    resposta.innerHTML += `
      <div>
        <div class="resposta">
          <div>
            <div>
              <h3>Produto:</h3>
              <p>${produto.nome}</p>
            </div>
            <div>
              <h3>Preço:</h3>
              <p>R$${produto.preco}</p>
            </div>
            <div>
              <h3>Quantidade:</h3>
              <p>${produto.quantidade}</p>
            </div>
          </div>
          <div>
            <box-icon type='solid' onclick="apagar(${index})" name='trash'></box-icon>
            <box-icon type='solid' onclick="atualizar(${index})"  name='edit'></box-icon>
          </div>
        </div>
      </div>
    `;
  });
}
