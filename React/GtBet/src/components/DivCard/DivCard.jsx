import './DivCard.css'

export const DivCard = ({titulo, descricao}) => {
    return(
        <>
            <div className='Card'>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                    <div className='divBtnCard'><button className='btnCard'>Apostar</button></div>
            </div>
        </>
    )
}