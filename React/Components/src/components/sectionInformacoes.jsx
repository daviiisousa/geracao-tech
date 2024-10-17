export function SectionInformacoes({titulo, sobre}){
    return(
        <section className="my-5 bg-white shadow-2xl hover:scale-105 text-black p-3 rounded-md">
            <h4 className="text-lg font-bold">{titulo}</h4>
            <p>{sobre}</p>
        </section>
    )
}