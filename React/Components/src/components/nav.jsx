export function Nav(){
    return(
        <>
            <nav className="flex justify-between px-10 py-3 items-center">
                <h1 className="text-3xl">Components</h1>
                <ul className="flex gap-5 ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Redes</a></li>
                </ul>
            </nav>
        </>
    )
}