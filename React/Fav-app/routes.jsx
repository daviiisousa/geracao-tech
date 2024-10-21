import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/Home/Home";
import { Favoritos } from "./src/pages/Favoritos/Favoritos";
import { Products } from "./src/pages/Products/Products";
import { Error } from "./src/components/Error/Error";
import { Headear } from "./src/components/Hedear/Headear";
import { Footer } from "./src/components/Footer/Footer";

export const RoutesApp = () => {
    return ( 
        <>
            <BrowserRouter>
            <Headear />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/product/:id" element={<Products />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </>
     );
}