import lojinhaIcon from '../../assets/icon/lojinhaIcon.png'
import './Header.css'
import { Nav } from '../Nav/Nav';

export const Header = () => {
    return ( 
        <>
        <section className='sectionHeader'>
            <div className='divHeader'>
                <img className='lojinhaIconHeader' src={lojinhaIcon} alt="icon da lojinha" />
                <h1 className='tituloHeader'>Lojinha</h1>
            </div>
            <Nav />
        </section>
        </>
     );
}