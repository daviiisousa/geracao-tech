import { log } from 'console';
import fs from 'fs'
const nomeDoArquivo = 'largeFile.txt';
const enconding = 'utf8'

function criarArquivoGrande(){
    const linhas = 100000;

    const writeStrem = fs.createWriteStream(nomeDoArquivo)
    for (let i =1; i < linhas; i++){
        writeStrem.write(`linha ${i} `)
    }

    writeStrem.end(() => {
        console.log(` ${linhas} escritas em ${nomeDoArquivo} `);
        
    })
}

function lerArquivoGrande(){
    console.log('\n 1 iniciando leitura do arquivo grande');
    
    const dados = fs.readFileSync(nomeDoArquivo, enconding)

    console.log('\n 2 conteudo do arquivo (sincrono): ', dados.slice(0, 1000));
    
    console.log('\n 3 continua a execuçao apos a leitura');
    
}

// criarArquivoGrande()
lerArquivoGrande()