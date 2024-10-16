import { BtnEnviar } from "./buttons/btnEnviar";

export function Form({children}){
    return(
        <form className="mx-11 p-3 bg-zinc-950 rounded-md" action="#">
            {children}
            <BtnEnviar />
        </form>
    )
}