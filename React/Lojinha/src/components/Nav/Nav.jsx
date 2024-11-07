import { Link } from 'react-router-dom';
import './Nav.css'

export const Nav = () => {
  return (
    <>
      <nav className="navHeader">
        <ul className="ulNav">
          <Link className="linkNav" to={"/"}>
            Home
          </Link>
          <Link className="linkNav" to={'/produto'}>Produtos</Link>
        </ul>
      </nav>
    </>
  );
};
