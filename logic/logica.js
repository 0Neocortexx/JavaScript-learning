function switchCase() {
    let colocacao = 5
    switch (colocacao) {
        case 1:
            console.log("Primeiro Lugar");
            break
        case 2:
            console.log("Segundo Lugar");
            break
        case 3:
            console.log("Terceiro Lugar");
            break
        case 4: case 5: case 6:
            console.log("Premio de participação")
            break
        default:
            console.log("Não subiu ao podio")
            break
    }
}

function forIn() {
    let lista = [10, 20, 30, 40, 50]

    // Pega as posições
    for (n in lista) {
        console.log(n)
    }

    // Pega os elementos
    for (n of lista) {
        console.log(n)
    }
}

function usoDoContinue() {
    let pares = 0
    for (let i = 0; i < 1000; i++) {
        if (i%2!=0) {
            continue // Cancela o loop e vai para o proximo
        }
        pares++
    }
    console.log(pares)
}
usoDoContinue()