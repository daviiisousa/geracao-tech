let menu;

do{
    menu = prompt("informe um numero de 1 a 4")

    switch(menu){
        case "0":
            console.log("saindo...")
            break
        case "1":
            console.log("somando")
            break
        case "2":
            console.log("subtraindo")
            break
        case "3":
            console.log("dividindo")
            break
        case "4":
            console.log("multiplicando")
            break
    }

}while(menu != 0)