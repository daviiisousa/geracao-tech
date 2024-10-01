function somar(num1, num2) {
    const resultado = num1 + num2
    return resultado
}

const valor1 = Number(prompt("digite um valor"))
const valor2 = Number(prompt("digite um valor"))
const resultado = valor1 + valor2

console.log(somar(valor1, valor2))

console.log(`a soma de ${valor1} e ${valor2} é ${resultado}`);