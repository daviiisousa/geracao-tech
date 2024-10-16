export function Main({children}){
    return(
        <>
            <main className="h-screen bg-zinc-900 text-white px-32 py-4">
                <h3 className="text-xl">Aprendendo Components</h3>
                {children}
            </main>
        </>
    )
}