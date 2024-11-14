import './Separador.css'

export const Separador = ({...props}) => {
    return ( 
        <>
            <div className="separador" style={props.style}></div>
        </>
     );
}