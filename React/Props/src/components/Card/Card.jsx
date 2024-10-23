import { Button } from "../Button/Button";
import Lobo from '../../assets/Card/lobo.jpg'
import './Card.css'

export const Card = ({titulo, descricao, button}) => {
  return (
    <>
      <section>
          <div className="divCard">
            <img className="imgCard" src={Lobo} alt="" />
            <h1>{titulo}</h1>
            <p> {descricao} </p>
            <Button tituloButton={button} />
          </div> 
      </section>
    </>
  );
};
