import { BtnEnviar } from "./buttons/btnEnviar";

export function Form({children}){
    return(
        <form className="mx-20 p-3 bg-zinc-950 rounded-md" action="#">
            <h1 className="text-2xl text-center mb-3">Cadastro</h1>
            {children}
            <BtnEnviar />
        </form>
    )
}