// EXERCICIO 01

const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
resultado = minhaIdade > idadeAmiga
resultado2 = minhaIdade - idadeAmiga

console.log("Sua idade é maior do que a do seu amigo?", resultado, resultado2)

// EXERCICIO 02

const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// Não sou maior de idade e quero passear de carro.
// Sou maior de idade e vou para a praia, e não quero passear de carro.
// Vou para a praia ou quero passear de caro.
// Posso tomar uma cervejinha e não vou passear de carro.

!b && d
(b && a) && !d
a || d
c && !d
