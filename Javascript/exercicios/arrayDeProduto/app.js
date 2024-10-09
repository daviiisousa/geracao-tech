// id (número único)
// nome (string)
// preco (número)
// quantidade (número)

// Uma função para adicionar um novo produto.
// Uma função para remover um produto com base no id.
// Uma função para atualizar a quantidade de um produto.
// Uma função para listar todos os produtos no inventário.

const produtos = [];

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

  if (nome === "" || preco <= 0 || qtd <= 0) {
    alert("Porfavor prencha os dados corretamento");
    return;
  }

  addNovoProduto(nome, preco, qtd);

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

  resposta.innerHTML += `
        <div>
            <div  class="resposta">
                <div>
                    <div>
                        <h3>Produto:</h3>
                        <p>${nome}</p>
                    </div>
                    <div>
                        <h3>Preço:</h3>
                        <p> ${preco}</p>
                    </div>
                    <div>
                        <h3>Quantidade:</h3>
                        <p> ${qtd}</p>
                    </div>
                </div>
            </div>
        </div>
  `;

  produtos.push(produto);
}
