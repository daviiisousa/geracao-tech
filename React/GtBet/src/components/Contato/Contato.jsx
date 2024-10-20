import { Container } from "../Container/Container";
import "./Contato.css";

export const Contato = () => {
  return (
    <>
      <section className="sectionContato">
        <Container>
          <h1 className="tituloContato">Entre em contato com nossa equipe</h1>
          <form className="formContato" action="#">
            <label htmlFor="nome">Nome:</label>
            <input type="text" />
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
          </form>
        </Container>
      </section>
    </>
  );
};
