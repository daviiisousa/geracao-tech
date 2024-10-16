import { useState } from "react"
import './nome.css'

export function Nome(){
    const [nome, setNome] = useState('')

    return(
        <>
            <div className="inputNome">
                <label htmlFor="nome">Nome</label>
                <input type="text"id="nome" onChange={(e) => {setNome(e.target.value)}}/>
            </div>
            <div>
                <p>Ola {nome}</p>
            </div>
        </>
    )
}