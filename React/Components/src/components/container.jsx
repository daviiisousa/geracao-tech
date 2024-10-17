export function Container({children}){
    return(
        <div className=" lg:px-32 lg:bg-white lg:py-3 sm:px-10 sm:py-3 ">
            <h3 className="text-xl font-bold text-black">Aprendendo Components</h3>
            {children}
        </div>
    )
}