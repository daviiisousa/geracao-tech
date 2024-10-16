export function LabelInput({label, htmlFor, id}){
    return(
        <>
            <div className="mb-3 flex justify-center">
                <label className="mr-3" htmlFor={htmlFor}>{label}</label>
                <input className="w-[50%]" id={id} type="text" />
            </div>
        </>
    )
}