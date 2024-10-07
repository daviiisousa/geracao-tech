const form = document.getElementById('formCalcular')
const resposta = document.getElementById('res')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const valor1 = Number(form.valor1.value)
    const valor2 = Number(form.valor2.value)

    if(valor1 <= 0 || valor2 <= 0){
        alert('digite um valor valido')
        return
    }

    const operacao = form.operacao.value

    calcularValor(valor1, valor2, operacao)
    
})

function mostrarResultado(resultado){

    resposta.innerHTML = `${resultado}`
    resposta.style.display = 'block'
}

function calcularValor(valor1, valor2, operacao = '1'){
    let resultado = ''

    switch(operacao){
        case '1':
            resultado = somar(valor1, valor2)
            break
        case '2':
            resultado = subtrair(valor1, valor2)
            break
        case '3':
            resultado = dividir(valor1, valor2)
            break
        case '4':
            resultado = multiplicar(valor1, valor2)
            break
    }
    mostrarResultado(resultado)
}

function somar(v1, v2){
    return v1 + v2
}

function subtrair(v1, v2){
    return v1 - v2
}

function dividir(v1, v2){
    return v1 / v2
}

function multiplicar(v1, v2){
    return v1 * v2
}

