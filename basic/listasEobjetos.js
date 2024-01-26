
function lista() {
    let n1 = [10, 20, 30]
    let n2 = [11, 22, 33, 44, 55]
    let n3 = [...n1]

    console.log("N1: " + n1);
    console.log("N2: " + n2);
    console.log("N2: " + n2);
}

function objetos() {
    const obj = { nome: "Bruno", energia: 100, vidas: 3, magia: 150 }

    const obj2 = { nome: "Pedro", energia: 100, vidas: 5, velocidade: 80 }

    const obj3 = { ...obj, ...obj2 }

    console.log(obj3)
}


function exemploPratico() {

    let valores = [1, 5, 4]
    
    // Ao inves de fazer todo esse rolê aqui
    let somatoria = 0;
    for (i = 0; i < valores.length; i++) {
        somatoria += valores[i]
    }
    console.log(somatoria)

    // Dá pra fazer assim
    const soma = (v1, v2, v3) => {
        return v1 + v2 + v3
    }
    console.log(soma(...valores))

}

const objs1 = document.getElementsByTagName("div") // HTML collection
const objs2 = [...document.getElementsByTagName("div")] // Array de elementos



// objetos()
// Spread espalha os elementos de um array e retorna elemento por elemento desse array
