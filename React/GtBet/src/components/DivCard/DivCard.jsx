import { BtnCard } from '../Butoes/BtnCard/BtnCard'
import cardFoto1 from '../../assets/img/geracaoTeh.jpg'
import './DivCard.css'

export const DivCard = ({titulo, descricao}) => {
    return(
        <>
            <div className='Card'>
                <img className='imgCard' src={cardFoto1} alt="" />
                    <h1>{titulo}</h1>
                    {/* <p>{descricao}</p> */}
                    <BtnCard btnCard={'Apostar'} />
            </div>
        </>
    )
}