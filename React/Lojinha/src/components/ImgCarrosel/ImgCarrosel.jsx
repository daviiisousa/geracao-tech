import './ImgCarrosel.css'

export const ImgCarrosel = ({
    fotoCarrosel,
    fotoAltCarrosel,
    tituloCarrosel,
    ...props
}) => {
    return ( 
        <>
            <div className='divCarrosel'>
                <h1 className='tituloCarrosel'>{tituloCarrosel}</h1>
                <img style={props.style} className="fotoCarrosel" src={fotoCarrosel} alt={fotoAltCarrosel} />
            </div>
        </>
     );
}