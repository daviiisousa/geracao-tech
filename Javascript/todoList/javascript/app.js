const alerta = document.querySelector(".alerta");
const listaDeTarefas = JSON.parse(localStorage.getItem("listaDeTarefas")) || [];
const formulario = document.querySelector("#form");

listarTarefas()

formulario.addEventListener("submit", (e) => {
  cadastrarTarefa(formulario);
});

function cadastrarTarefa(formulario) {
  const titulo = formulario.titulo.value;
  const descricao = formulario.descricao.value;

  listaDeTarefas.push({
    titulo,
    descricao,
  });

  localStorage.setItem("listaDeTarefas", JSON.stringify(listaDeTarefas));
}

function listarTarefas(){
    listaDeTarefas.forEach(tarefa => {
        console.log(tarefa);
        
    });
}
