const nota1 = Number(prompt("digite a sua nota 1"))
const nota2 = Number(prompt("digite sua nota 2"))
const nota3 = +prompt("digite sua nota 3")

const media = (nota1 + nota2 + nota3) / 3
console.log(`a media das notas: ${nota1}, ${nota2} e ${nota3} e: ${media.toFixed(2)}`)
