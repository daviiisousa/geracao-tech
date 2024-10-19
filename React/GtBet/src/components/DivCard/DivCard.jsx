import { BtnCadastro } from '../Butoes/BtnCadastro/BtnCadastro'
import './DivCard.css'

export const DivCard = ({titulo, descricao}) => {
    return(
        <>
            <div className='Card'>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                    <button>Apostar</button>
            </div>
        </>
    )
}