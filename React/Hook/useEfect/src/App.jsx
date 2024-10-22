import { useEffect, useState } from "react";

function App() {
  // Inicializa o estado com as tarefas do localStorage, se existirem, ou com um array vazio
  const [tarefas, setTarefas] = useState(() => {
    const tarefaslocalStorage = localStorage.getItem("@tarefas");
    return tarefaslocalStorage ? JSON.parse(tarefaslocalStorage) : [];
  });

  const [input, setInput] = useState("");

  // Salva as tarefas no localStorage sempre que o estado `tarefas` for atualizado
  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") {
      return; // Evita adicionar tarefas vazias
    }

    setTarefas([...tarefas, input]);
    setInput(""); // Limpa o campo de entrada após a tarefa ser adicionada
  }

  return (
    <>
      <div>
        <h1>Tarefas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Tarefas">Tarefas:</label>
          <br />
          <input
            type="text"
            id="Tarefas"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
