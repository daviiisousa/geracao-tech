import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState('')
  const [usuario, setUsario] = useState({
    nome: nome,
    email: email
  })

  function handleRegister(){
    setUsario({
      nome:nome,
      email:email
    })
  }
  return (
    <>
      <h1>Cadastrar Usuario </h1>
      <hr />

      <form action="#">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </form>
      <button onClick={handleRegister}>enviar</button>
      <div>
        Nome :{usuario.nome}
        <br />
        Email: {usuario.email}
      </div>
    </>
  );
}

export default App;
