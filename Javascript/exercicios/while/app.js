document.getElementById("cadastrar").addEventListener('click', receberValor)

function receberValor(){

    let valor;

    do{
        valor = prompt("digite um valor")

        if(valor % 2 == 0){
            console.log(`${valor} e par`)
        }

    }while(valor == null || valor != 0)
}
