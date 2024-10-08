const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

const listaDeEmpresa = empresas.map((empresa) => console.log(empresa.nome))

const empresaValor = empresas.filter((empresa) => {
    if(empresa.valorDeMercado > 100){
        console.log(`a empresa ${empresa.nome} tem o valor de mercado:\n ${empresa.valorDeMercado}`)
    }
})

// const ValorDaEmpresa = empresas.reduce((acc, atual) => {
//     return acc + atual.valorDeMercado
// }, 0)

// console.log(ValorDaEmpresa);

// const empresaMaisAntiga = empresas.reduce((maisAntiga, empresa) => {
//     return (empresa)
// }, empresas[0])

const nomeECeo = empresas.map((empresa) =>{
    console.log(`O CEO ${empresa.CEO} e dono da ${empresa.nome}`)
})



