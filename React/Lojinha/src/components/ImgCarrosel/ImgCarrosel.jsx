import './ImgCarrosel.css'

export const ImgCarrosel = ({
    fotoCarrosel,
    fotoAltCarrosel,
    ...props
}) => {
    return ( 
        <>
            <div className='divCarrosel'>
                <h1>teste</h1>
                <img style={props.style} className="fotoCarrosel" src={fotoCarrosel} alt={fotoAltCarrosel} />
            </div>
        </>
     );
}