import './btnPrimary.css'

export const BtnPrimary = ({titulo, children, ...props}) => {
    return ( 
        <>
            <button className='btnPrimary'  style={props.style}>
                {children}
            </button>
        </>
     );
}