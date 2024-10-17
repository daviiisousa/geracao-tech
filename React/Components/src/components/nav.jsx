import { Link } from "react-router-dom";

export function Nav(){
    return(
        <>
            <nav className="flex justify-between px-10 py-3 items-center ">
                <h1 className="text-3xl">Components</h1>
                <ul className="flex gap-5 ">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/sobre"}>Sobre</Link></li>
                </ul>
            </nav>
        </>
    )
}