import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/Home/Home";
import { Error } from "./src/pages/Error/Error";
import { Produtos } from "./src/pages/Produto/Produto";
import { Cart } from "./src/pages/Cart/Cart";
import { Register } from "./src/pages/register/Registe";

export const RoutesApp = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produto" element={<Produtos />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}