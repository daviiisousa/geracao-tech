import './Header.css'
import { Nav } from '../Nav/Nav';
import { Logo } from '../Logo/Logo';


export const Header = () => {
    return ( 
        <>
        <div className='header'>
            <div className='divHeader'>
                <Logo  />
                <h1 className='tituloHeader'>Lojinha</h1>
                <input className='inputHeader' type="text" placeholder='estou procurando por...' />
            </div>
            <Nav />
        </div>
        </>
     );
}