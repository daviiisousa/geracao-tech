import { useState } from "react";

function App() {
  const [nome, setNome] = useState(""); // criar um usestate para verifcar e modificar o estado nome 
  const [email, setEmail] = useState("");// criar um usestate para verifcar e modificar o estado email 
  const [idade, setIdade] = useState(0);// criar um usestate para verifcar e modificar o estado idade 

  const [usuario, setUsuario] = useState({}); // criar um usestate para verifcar e modificar o estado usuario 

  function handleSubmit(e) { // função que envia e modifica os usuarios 
    e.preventDefault()
   setUsuario({ // recebe o valor das chaves do usuario 
    nome: nome,
    email: email,
    idade: idade
   })
  }

  return (
    <>
      <h1>Registrar Usuario</h1>
      <div>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label> <br />
          <input type="text" onChange={(e) => setNome(e.target.value)}/> 
          {/*recebe o valor do nome*/}
          <br /> 
          <label htmlFor="email">Email:</label> <br />
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          {/*recebe o valor do email*/}
          <br />
          <label htmlFor="idade">Idade:</label> <br />
          <input type="number" onChange={(e) => setIdade(e.target.value)} />
          {/*recebe o valor da idade*/}
          <br />
          <button type="submit">Registrar</button>
        </form>
      </div>
      <div>
        <span>Nome: {usuario.nome}</span> <br /> {/*mostra os valores de cada chave do usuario*/}
        <span>Email: {usuario.email}</span> <br /> {/*mostra os valores de cada chave do usuario*/}
        <span>Idade: {usuario.idade}</span> <br /> {/*mostra os valores de cada chave do usuario*/}
      </div>
    </>
  );
}

export default App;
