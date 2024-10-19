import { Link } from "react-router-dom";
import GTIcon from "../../assets/aposta.png";
import imgBackgroud from '../../assets/Background/geraçaoTeh.jpg'
import "./Nav.css";
import { BtnCadastro } from "../Butoes/BtnCadastro/BtnCadastro";
import { BtnEntrar } from "../Butoes/btnEntrar/btnEntrar";

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
        <marquee behavior="scroll" direction="left" className="tituloBackground">Cadastre-se e ganhe 50 reais </marquee >
      <div className="imgBackground">
        <div className="divBtnBackground">
            <BtnCadastro btnCadastro={"Cadastre-se"} />
            <BtnEntrar btnEntrar={'Cliente existente'} />
        </div>
      </div>
    </>
  );
};
