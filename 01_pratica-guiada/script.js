//CODIGO AQUI
let saldo = 15 + 22.40
console.log("Saldo:", saldo.toFixed)

saldo = saldo - 12.34
console.log("Salto atualizado:", saldo.toFixed)

saldo = saldo / 3
console.log("Valor investido:", saldo.toFixed)

saldo = saldo % 3
console.log("Resto para chiclete:", saldo.toFixed)

const mltp = 2*2+2
console.log("MS1:", mltp.toFixed)

const mltp2 = 2*(2+2)
console.log("MS2:", mltp2.toFixed)

const compIgual = 5 === 5
const compDif = 5 !== 5
console.log("5 === 5", compIgual)
console.log("5 !== 5", compDif)

const compTipo1 = 5 !== "5"
console.log("5 !== ''5''", compTipo1)

const compTipo2 = "5" === "cinco"
console.log("''5'' === ''cinco''", compTipo2)

const compType1 = typeof 5 === typeof 20
console.log("typeof 5 === typeof 20", compType1)

const compType2 = typeof "5" === typeof "cinco"
console.log("typeof ''5'' === typeof ''cinco''", compType2)

let num1 = 2
let num2 = 8
let resultado

resultado = num1 == num2
console.log("O primeiro número é igual ao segundo?", resultado)

resultado = num1 <= num2
console.log("O primeiro número é menor ou igual ao segundo?", resultado)

resultado = num1 > num2
console.log("O primeiro número é maior que o segundo?", resultado)

resultado = num1 < num2
console.log("O primeiro número é menor que o segundo?", resultado)

//

const a = 'Quero dirigir um Celta 2012';
const b = 'Sou maior de idade';
const c = 'Consigo comprar o Celta por 22.000 reais';
const d = 'Consigo alugar o Celta';
const e = 'Tenho carteira de motorista';

// Quero dirigir o Celta 2012.
// Não sou maior de idade.
// Sou maior de idade e não tenho carteira de motorista.
// Sou maior de idade e consigo comprar ou alugar o Celta.
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta.

a
!b
b && !e
b && (c || d)
(b && e) && !a
