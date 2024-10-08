const carros = [
    {
        id: 1,
        fabricante: "honda",
        modelo: "Civic",
        potencia: 120.3,
        cambio: "manual"
    },
    {
        id: 2,
        fabricante: "Fiat",
        modelo: "Touro",
        potencia: 110.3,
        cambio: "automatico"
    }
]

const carro = {
    id: 2,
    fabricante: "Fiat",
    modelo: "Touro",
    potencia: 110.3,
    cambio: "automatico"
}

carros[1].cambio = 'manual'

// carros.push(carro)

console.log(carros)