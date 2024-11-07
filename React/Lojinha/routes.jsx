import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/Home/Home";
import { Error } from "./src/pages/Error/Error";

export const RoutesApp = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}