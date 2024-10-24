import { Link } from "react-router-dom";
import './Headear.css'

export const Headear = () => {
    return ( 
        <>
            <header>
                <Link className="logo" to={'/'}>Geracao Bet Store</Link>
                <Link className="favoritos" to={'/favoritos'}>Favoritos</Link>
            </header>
        </>
     );
}