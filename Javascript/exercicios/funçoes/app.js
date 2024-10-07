const form = document.getElementById('formCalcular')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    alert('vc clicou no botao')

    const valor1 = Number(form.valor1.value)
    const valor2 = Number(form.valor2.value)
    alert(`vc digitou ${valor1} e ${valor2}`)

    const operacao = form.operacao.value

    calcularValor(valor1, valor2, operacao)
})


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
    mostar('Resultado: ', resultado)
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

function mostar(titulo, mensagem){
    alert(`${titulo} ${mensagem}`)
}