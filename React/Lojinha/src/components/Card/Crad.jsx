import { BtnPrimary } from "../Buttons/btnPrimary/btnPrimary";
import "./Card.css";
export const Card = ({
  imgProduto,
  tituloProduto,
  descricaoProduto,
  ...props
}) => {
  return (
    <>
      <div className="cardProduto" style={props.style}>
        <img
          className="imagenCardProduto"
          src={imgProduto}
          alt={tituloProduto}
        />
        <h1 className="tituloCardProduto">{tituloProduto}</h1>
        <p className="descriçaoProduto">{descricaoProduto}</p>
        <BtnPrimary style={{ width: "100%" }}>Comprar</BtnPrimary>
      </div>
    </>
  );
};
