import { DivCard } from '../DivCard/DivCard'
import './SectionCard.css'

export const SectionCard = () =>{
    return(
        <>
            <div className='divSection'>
                <h1>Apostas</h1>
                <section className="conatinerCard">
                    <DivCard titulo={"Jogo do bixo"} descricao={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed vel fuga quam ipsum facere vitae magnam asperiores odio beatae. Officiis quos adipisci nemo neque iure voluptas alias accusantium excepturi.."} />
                    <DivCard titulo={"Apostar em curso"} descricao={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed vel fuga quam ipsum facere vitae magnam asperiores odio beatae. Officiis quos adipisci nemo neque iure voluptas alias accusantium excepturi."} />
                    <DivCard titulo={"Bet"} descricao={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed vel fuga quam ipsum facere vitae magnam asperiores odio beatae. Officiis quos adipisci nemo neque iure voluptas alias accusantium excepturi."} />
                
                </section>
            </div>
        </>
    )
}