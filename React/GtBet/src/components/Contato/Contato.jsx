import { Container } from "../Container/Container";
import { BtnCard } from "../Butoes/BtnCard/BtnCard";
import "./Contato.css";

export const Contato = () => {
  return (
    <>
      <section className="sectionContato">
        <Container>
          <div className="ContainerContato">
            <div className="divContato">
              <h1 className="tituloContato">Nossas redes</h1>
              <ul className="ListaContato">
                <li className="itemListaContato">
                  <box-icon type="logo"   name="instagram"></box-icon>
                  <a target="_blanck" href="https://www.instagram.com/daviiisousa18/">Instagram</a>
                </li>
                <li className="itemListaContato">
                  <box-icon type="logo"  name="facebook-square"></box-icon>
                  <a target="_blanck" href="https://www.facebook.com/profile.php?id=100031301692757">Facebook</a>
                </li>
                <li className="itemListaContato">
                  <box-icon name="whatsapp-square"  type="logo"></box-icon>
                  <a target="_blanck" href="#">Whatsaap</a>
                </li>
                <li className="itemListaContato">
                  <box-icon type='logo' name='linkedin-square'></box-icon>
                  <a target="_blanck" href="https://www.linkedin.com/in/davi-sousa-alves/" >Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="divContato">
              <h1 className="tituloContato">
                Entre em contato com nossa equipe
              </h1>
              <form className="formContato" action="#">
                <div className="divFormContato">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" id="nome" />
                </div>
                <div className="divFormContato">
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" />
                </div>
                <div className="divFormContato">
                  <label htmlFor="cpf">Cpf:</label>
                  <input type="number" id="cpf" />
                </div>
                <BtnCard btnCard={'Enviar'} />
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
