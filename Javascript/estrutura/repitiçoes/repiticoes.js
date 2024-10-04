let contador = 0

while (contador <= 10){
    console.log(contador)
    contador++
}
//while e uma estrutura de repitiçao que e executada enquanto uma condiçao for atendida, se condifçao nunca  for false ele ira entrar em um loop infinito

do{
    console.log(contador)
    contador++
}while(contador < 10)

// o do while sempre sera executado no comeco do "do" depois ele irar entrar no while e se a condiçao for verdadeira ele ira ser executado 

for (let i = 1; i > 10; i++){
    console.log(i)
}

// um for e uma estrutura de rerepitiçao que faz 3 passos, 1º: cria uma variavel 2º: faz uma condiçao 3º: faz uma incrementaçao (ou não) da sua variavel criada. ele ira executar um bloco de codigo enquanto a condiçao passada for verdadeira. 

const pessoa = {
    nome: "davi",
    idade: 18,
    estudando: true,
}

for (const dados in pessoa){
    console.log(`os dados da pessoa ${pessoa.nome} são ${pessoa[dados]}`)
}

// O for...in é uma forma eficiente de percorrer todas as propriedades enumeráveis de um objeto. Ele cria uma variável que será usada para iterar sobre as chaves do objeto, permitindo acessar tanto as propriedades quanto seus valores.
