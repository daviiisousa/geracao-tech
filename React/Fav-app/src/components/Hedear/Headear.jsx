import { Link } from "react-router-dom";

export const Headear = () => {
    return ( 
        <>
            <header>
                <Link className="logo" to={'/'}>Geração Bet Store</Link>
                <Link className="favoritos" to={'/favoritos'}>Favoritos</Link>
            </header>
        </>
     );
}