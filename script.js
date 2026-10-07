// IF e ELSE com operadores Logicos AND OR E = && ou ||

// USANDO OU  = RECEBE DESCOINTO DE FOR ESTUDABRE OU SE TIVER UM CUPON DE DESCONTO

let estudante = false
let cupom = false

if (estudante || cupom) {
  console.log('Voce tem acesso a uma promoção')
} else {
  console.log(
    'Voce precisa ser estudante ou ter um cupom para ter acesso ao desconto',
  )
}

// SITE DE EVENTO ONLINE VER IDADE MINIMA OU SE JA FEZ O REGISTRO  IDADE MAIOR QUE 18 REGISTRO TEM QUE SER COMO = TRUE

//let idade = 19
//let registro = true
//
//if (idade >= 18 && registro) {
//  console.log('Voce pode jogar e ja esta registrado!')
//} else {
//  console.log('Idade menor')
//}
//
// DESAFIO MOSTRAR PONTUAÇÂO E UMA MSG

//let nota = 74
//
//if (nota >= 90) {
//  console.log('Exelente!')
//} else if (nota >= 75) {
//  console.log('Muito Bom!')
//} else {
//  console.log('Você pode melhorar!')
//}

// IF E ELSE / ESLE IF  (SE E SE NAO e )

//if (condição) {
//    // VAI EXECUTAR SE ESTA CONDIÇÂO FOR VERDADEIRA
// SE NAO EXCUTA A OUTRA PARTE

//}

//let hora = 19
//
//if (hora <= 12) {
//  console.log('Bom dia')
//} else if (hora <= 18) {
//  console.log('Boa tarde')
//} else {
//  console.log('Boa noite')
//}

//DESAFIO - CRIAR LISTA num 1 e num 2 sao mescladas e organizadas

//let num1 = [10, 20, 30, 40, 50]
//let num2 = [90, 80, 70, 60, 50]
//
//let y
//
//y = num1.concat(num2).sort().slice()
//
//console.log(y)

// ARRAY NESTED ARRAYS - UMA DENTRO DA OUTRA

//let numeros = [10, 11, 19, [25, 22, 27], 9, 7, 5, [47, 44, 51]]
//
//let y
//
//y = numeros.flat().sort()
//console.log(y)
//
//console.log(numeros)

// METODOS ESTATICO DE ARRAY

//let num1 = 10
//let num2 = 20
//let num3 = 30
//
//let todos = Array.of(num1, num2, num3)
//
//console.log(todos)
//
//let y
//
//y = Array.from('122')
//console.log(y)

// TODOS ITENS EM APENAS UMA ARRAY

//let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters', 'Rats']
//let numbers = [10, 20, 33, 40, 5, 15, true]

//let y
//y = petShop.concat(numbers).reverse().sort()

//console.log(y)

// CHAIN VC PODE USAR VARIOS METODOS E ELE FUNCIONA OCMO SE FOSSE UMA CORRENTE CONECTADA
//let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']
//let numbers = [10, 20, 33, 40, 5, 15, true]
//
//let petNumber = [petShop, numbers]
//console.log(petNumber)
//
//let y
//petShop.push(numbers)
//console.log(petShop)
//
//y = petShop[1][1]
//console.log(y)
//
//let y

//y = petShop.splice(1, 3).reverse().toString().includes('Cats')
//console.log(y)
//console.log(petShop)

// EXERCICIO CRIAR UMA LISTA E IMPRMIR O ITEM QUE APARACE BIRD

//let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']
//let numbers = [10, 20, 33, 40, 5, 15, true]
//let y

//y = petShop.includes('cats')
//y = petShop.indexOf('Cats')
//y = petShop.slice(1, 3)
//y = petShop.splice(1, 3)
//console.log(y)
//console.log(petShop)
//petShop.push('Rato')
//petShop.pop()
//petShop.shift()
//petShop.unshift('Suco')
//petShop.sort()
//console.log(petShop.length)
//
//console.log(petShop)

//ARRAY COMO FUNINA OQUE FAZ ETC ! ELA PERMINTE ARMAZENAS MULTIPLOS DADOS VARIOS TIPOS NUMEROS OBJETOS STRING
// VAMOS CROIAR UMA LISTA DE CARRINHOS DE COMPRAS

//let carrinho = ['Agua', 'Arroz', 'Carne', 'Feijao']
//carrinho[0] = 'Cerveja'
//
//console.log(carrinho)
//console.log(`A minha comida favorita é ${carrinho[2]} e ${carrinho[1]}.`)
//console.log(`A minha lista de hoje contem os itens ${carrinho}`)

// alterando o idioma para formatos BR USA ETC

//let data

//data = Intl.DateTimeFormat('en-US').format(data)

//console.log(data)

// Criando calculadora de Dias

//let inicio = new Date('2023/10/15')
//let fim = new Date('2023/12/15')

//let resultado = (fim - inicio) / (1000 * 3600 * 24)

//console.log(resultado)

//OBJETO DE DATA E HORA (Date)

//let agora = new Date()
//
//console.log(agora)
//
//// let dataHoje = new Date(2025, 4, 20, 10, 35, 0)
//
////console.log(dataHoje)
//
//console.log(agora.getDate())
//console.log(agora.getMonth())
//console.log(agora.getHours())

//Objetos para multiplos valores

//let carNome =  polo
//let KML = 600
//let velicidadeMx = 250
//let potencia = 1200
//
//let car = {
//  carNome: 'Polo',
//  KML: 600,
//  velicidadeMx: 250,
//  potencia: 1200,
//}
//
//console.log(car)
//
////Metodos matematicos (MATH)
//
//let num1 = 2
//console.log(Math.round(num1))
//console.log(Math.ceil(num1))
//console.log(Math.floor(num1))
//console.log(Math.sqrt(num1))
//console.log(Math.pow(num1, 3))
//console.log(Math.abs(num1))
//console.log(Math.round(Math.random() * 1000000 + 1))

////Numeros  metodos
//let num1 = 3.37012
//
//console.log(num1)
//console.log(num1.toFixed(2))
//console.log(num1.toString(2))
//
//String metodos

//let texto = 'Estou estudando java script'
//
//console.log(texto.charAt(4))
//console.log(texto.includes('java'))
//console.log(texto.indexOf('estudando'))
//console.log(texto.slice(6, 16))
//console.log(texto.toUpperCase())
//console.log(texto.toLocaleLowerCase())
//console.log(texto.trim())
//console.log(texto.repeat(5))
//console.log(texto.replace('java', 'Jeba'))

// Coerção de tipo - e uma atribuição forçada de tipo
//
//let nome = 'Rogerio'
//let sobreNome = 'Gonzaga'
//let idade = 42
//
//console.log(
//  `Ola meu nome é ${nome} ${sobreNome}, e tenho ${idade} anos de Idade:`,
//)
//
//// COMPARAÇÂO OPERADORES
//console.log(3 == '4') // assim e solta
//
//// iguladade restrita valida o dado e tipo do dado
//console.log(3 === 3)
//
//// Deseugualdade Diferente de
//console.log(3 != '3')
//console.log(3 !== '3')
//
//// MAIOR OU MENOR
//console.log(10 > 10)
//console.log(8 < 3)
//console.log(8 >= 3)
//console.log(8 <= 10)

// parseInt ele retoanra sempre um numero inreiro

//age = parseInt(age)
//console.log(age, typeof age)

// Parsefloat () converte numero float fracionario

//age = parseFloat(age)
//console.log(age, typeof age)

// Operador Unario

//age = +age
//console.log(age)

//age = Number(age)
//console.log(age, typeof age)

//Number para string

//age = age.toString()
//age = String(age)

//Number para Boolean true OR false
//number 0 = false
//number de 1 em diante e = true
// age = Boolean(age)

// CALCULOS
//
//let total = 6 + 6
//total = 6 - 2
//total = 6 * 2
//total = 6 / 2
//total = 10 % 3 // resto da divisao
//total = 7
////total++ // ++ e um encremento
//total--

// resto da divisao , ecremento e decremento

///// OPERADORES DE ATRIBUIÇÂO
///let total = 3
///total += 5
///console.log(total)
