import { Link } from 'react-router-dom';
import lojinhaIcon from '../../assets/icon/lojinhaIcon.png'
import './Header.css'

export const Header = () => {
    return ( 
        <>
        <section className='sectionHeader'>
            <div className='divHeader'>
                <img className='lojinhaIconHeader' src={lojinhaIcon} alt="icon da lojinha" />
                <h1 className='tituloHeader'>Lojinha</h1>
            </div>
            <nav className='navHeader'>
                <ul className='ulHeader'>
                    <Link>Home</Link>
                    <Link>Produtos</Link>
                </ul>
            </nav>
        </section>
        </>
     );
}