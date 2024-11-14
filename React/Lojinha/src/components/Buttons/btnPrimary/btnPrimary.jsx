import './btnPrimary.css'

export const BtnPrimary = ({children, ...props}) => {
    return ( 
        <>
            <button className='btnPrimary' style={props.style}>
                {children}
            </button>
        </>
     );
}