import { useEffect, useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    "estudar React",
    "estudar javascript",
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefaslocalStorage = localStorage.getItem("@tarefas")
    
    if (tarefaslocalStorage) {
     setTarefas(JSON.parse(tarefaslocalStorage))
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleSubmit(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
  }

  return (
    <>
      <div>
        <h1>Tarefas</h1>
        <form action="#" onSubmit={handleSubmit}>
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
        {tarefas.map((tarefa) => (
          <li key={tarefa}>
            {tarefa} 
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
