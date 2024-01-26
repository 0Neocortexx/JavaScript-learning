"use strict" // Exige que todas as variaveis sejam declaradas ex: var nome = "Bruno"; Ajuda a deixar o código mais correto e evitar erros
/* diferença entre o var, let e const
var: a variável estará disponivel em todo o escopo do projeto
let: disponivel apenas no escopo onde foi criada
const: vária que não altera o valor após declarada
*/

function letVar() {
    if(true) {
        var variavelDeTeste = "Esta variável existirá fora do escopo do IF";
        let variavelDeTeste2 = "Esta variável não existirá fora do escopo do IF";
        const variavelDeTeste3 = "Esta variável não poderá teu seu valor alterado;"
    }
}

/* Diferença entre o == e o ===
== : faz uma comparação mais superficial, exemplo: 1 == "1" será true pois os valores são iguais porem os tipos são diferentes
=== : faz uma comparação mais aprofundada considerando também os tipos, exemplo: 1 === "1" será false
*/

// Operador ternário

function ternario() {
    let num = 10;
    /*
    Neste caso o "?" atua como operador ternário 
    Na Expresão ternária o retorno significa False e o 1 significa true
    O ! atua como inversor da operação
    Sintaxe: Teste Lógico ? se verdadeiro : se falso;
    */
    let res = (!(num%2) ? "Par" : "Impar");

    /*
    Nesse caso ele faz uma comparação e retorna se true "Verdadeiro e se false "Falso"
    */
    let num2 = 5;
    let res2 = (num > num2 ? "Verdadeiro" : "Falso");
    
    /* Exemplo prático 
    Banco de dados retornou um caractere para dizer se o usuário está ativo ou inativo
    Digamos que ele retornou A de Ativo, nesse caso ele estará ativo  
    */
    
    let situacao = "A";
    let res3 = (situacao == "A" ? "Ativo" : "Inativo");



    console.log(res);
    console.log(res2);
    console.log(res3);
}

/* typeOF
Retorna o tipo da variável, ex: 
let valor = "Jonas";
let a = typeof(valor);
console.log(a);
retorno = String
*/

ternario()