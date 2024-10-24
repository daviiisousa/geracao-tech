import fs from 'fs'

const nomeDoArquivo = `${path}exemplo.txt`
const enconding = 'utf8'
let path = '/'

function criarArquivo(){
    const content = 'escrevendo em um arquivo com Node.js';
    fs.writeFile(path + nomeDoArquivo, content, err => {
        if(err) {
            console.error('erro ao escrever no arquivo', err)
            return
        }
    
        console.log('arquivo escrito com sucesso ')
    })
}

function lerArquivo(){
    fs.readFile(nomeDoArquivo, enconding, (erro, dados) => {
        if(erro){
            console.error('error ao ler o arquivo: ', erro);
            return
        }

        console.log('conteudo do arquivo: ', dados);
    })
}

function addConteudo(){

    const novoTexto = "\n conteudo adicional"

    fs.appendFile(nomeDoArquivo, novoTexto, (erro) => {
        if(erro){
            console.error('error ao add o conteudo: ', erro);
            return
        }

        // console.log('conteudo adicionado com sucesso');
    })
    lerArquivo()
}

function excluirArquivo(){

    fs.unlink(nomeDoArquivo,  (erro) => {
        if(erro){
            console.error('error ao add o conteudo: ', erro);
            return
        }

        console.log('arivo excluido')
    })

}

function cricarDiretorio(){

    const novaPasta = 'newPast'

    fs.mkdirSync(novaPasta,  (erro) => {
        if(erro){
            console.error('error ao add o conteudo: ', erro);
            return
        }

        console.log('diretorio criado')
    })
    path = `/${novaPasta}/`
    criarArquivo()
    lerArquivo()

}


// funçoes //

// criarArquivo()
// lerArquivo()
// addConteudo()
// excluirArquivo()
cricarDiretorio()