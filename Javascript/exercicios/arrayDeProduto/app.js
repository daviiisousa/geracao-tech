const ProdutoArray = JSON.parse(localStorage.getItem('produto')) || []

const form = document.getElementById("form");
const resposta = document.getElementById("resposta");
const inputProduto = document.getElementById("produtos");
const inputPreco = document.getElementById("preco");
const inputQuantidade = document.getElementById("qtd");

renderizarProdutos()

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

  ProdutoArray.push(produto);

  localStorage.setItem('produto', JSON.stringify(ProdutoArray))

}

function apagar(index) {
  // Remove o produto do array usando o índice
  ProdutoArray.splice(index, 1);
  renderizarProdutos(); // Atualiza a exibição
  localStorage.setItem('produto', JSON.stringify(ProdutoArray));

}

function atualizar(index) {
  // Pedir o novo valor da quantidade ao usuário
  const valorNovo = Number(prompt('Digite uma nova quantidade'));

  // Verifica se o valor inserido é válido
  if (isNaN(valorNovo) || valorNovo <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // Atualizar o produto existente com a nova quantidade
  ProdutoArray[index].quantidade = valorNovo;

  // Re-renderizar a lista de produtos
  renderizarProdutos();
  localStorage.setItem('produto', JSON.stringify(ProdutoArray));

}


function renderizarProdutos() {
  // Limpa a exibição anterior
  resposta.innerHTML = ''

  // Itera sobre os produtos para renderizá-los
  ProdutoArray.forEach((produto, index) => {
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
