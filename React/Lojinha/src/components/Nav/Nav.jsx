import { Link } from "react-router-dom";
import "./Nav.css";
import { CircleUserRound, ShoppingBasket } from "lucide-react";

export const Nav = () => {
  return (
    <>
      <nav className="navHeader">
        <ul className="ulNav">
          <Link className="linkNav" to={"/"}>
            Home
          </Link>
          <Link className="linkNav" to={"/produto"}>
            Produtos
          </Link>
          <Link to={"/cart"}>
            <ShoppingBasket className="linkNav" color="#ffffff" />
          </Link>
          <Link to={"/register"}>
            <CircleUserRound
              className="linkNav"
              size={48}
              color="#ffffff"
              strokeWidth={1.5}
            />
          </Link>
        </ul>
      </nav>
    </>
  );
};
