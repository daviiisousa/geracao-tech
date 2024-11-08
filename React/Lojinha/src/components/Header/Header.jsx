import './Header.css'
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';


export const Header = () => {
    return ( 
        <>
        <section className='sectionHeader'>
            <div className='divHeader'>
                <Logo  />
                <h1 className='tituloHeader'>Lojinha</h1>
                <input className='inputHeader' type="text" placeholder='estou procurando por...' />
            </div>
            <Nav />
        </section>
        </>
     );
}