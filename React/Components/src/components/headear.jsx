import React from "react"

export function Headear({children}){
    return(
        <>
            <header className="bg-blue-400 w-[100%] ">
                {children}
            </header>
        </>
    )
}