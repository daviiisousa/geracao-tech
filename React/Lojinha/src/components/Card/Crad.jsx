import { BtnPrimary } from "../Buttons/btnPrimary/btnPrimary";
import "./Card.css";
export const Card = ({
  imgProduto,
  tituloProduto,
  descricaoProduto,
  icon,
  tituloBtn,
  ...props
}) => {
  return (
    <>
      <div className="cardProduto" style={props.style}>
        <img
          className="imagenCardProduto"
          src={imgProduto}
          alt={imgProduto ? tituloProduto : ''} 
        />
        {icon}
        <h1 className="tituloCardProduto">{tituloProduto}</h1>
        <p className="descriçaoProduto">{descricaoProduto}</p>
        <BtnPrimary style={{ width: "100%" }}>{tituloBtn}</BtnPrimary>
      </div>
    </>
  );
};
