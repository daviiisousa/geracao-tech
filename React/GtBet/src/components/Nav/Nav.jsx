import { Link } from "react-router-dom";
import GTIcon from "../../assets/aposta.png";
import imgBackgroud from '../../assets/Background/geraçaoTeh.jpg'
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <h1>GTBet</h1>
          <img className="icon" src={GTIcon} alt="" />
        </div>
        <ul>
          <li>
            <Link className="linkNav" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="linkNav" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
        <h1 className="tituloBackground">Cadastre-se e ganhe 50 reais</h1>
      <div className="imgBackground">
        <div className="divBtnBackground">
            <button>Abra sua conta</button>
            <button>Cliente existente</button>
        </div>
      </div>
    </>
  );
};
