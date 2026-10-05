// Questão 1
/* let nome = "Gabriel Santos";
let idade = 20;
let cidade = "Feira de Santana";

console.log(nome);
console.log(idade);
console.log(cidade); 
 */
// Questão 2
/* let nome = "Carlos";
let idade = 20;
console.log("Meu nome é" , nome);
console.log(idade); */

// Questão 3
/* let preco = 150;
preco = 200;
console.log(preco); */

// Questão 6
/* let a = 5;
let b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); */

// Questão 8
/* let teclado = 120;
let mouse = 80;
let totalCompra = teclado + mouse;
console.log(totalCompra); */

// Questão 9
/* 
let a = 27;
let b = 4;
let resto = 27 % 4;
console.log(resto);

// Quesão 10
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media); */

// Questão 11
/* let a = 2;
let b = "2";

if (a == b) {
    console.log(a, " e ", b, "são iguais");
} else {
    console.log(a, " e ", b, "não são iguais");
}

if (a === b) {
    console.log(a, " e ", b, "são iguais");
} else {
    console.log(a, " e ", b, "não são iguais");
} */

// Questão 12
/* console.log(10 > 5);
console.log(8 === "8");
console.log(7 !== 7);
console.log(15 <= 15); */ 

// Questão 13
/* let usuario_correto = false;
let senha_correta = false;

if (usuario_correto === true && senha_correta == true) {
    console.log("Sistema acessado com sucesso");
} else {
    if (usuario_correto === false) {
        console.log("Nome de usuario esta incorreto");
    } else if (senha_correta === false) {
        console.log("Senha esta incorreta");
    } else if (usuario_correto === false && senha_correta == false) {
        console.log("Nome de usuario e senha estão incorretos");
    }
}  */

// Questão 14
/* let nome = "Gabriel";
let idade = 20;
let estudante = true;

if (estudante === true || idade >= 60) {
    console.log("Desconto foi liberado");
} else {
    console.log("Desconto não foi liberado");
}  */

// QUESTÃO 15
/* let idade = 20;
let estudante = true;
console.log(idade >= 18 && estudante === true);
console.log(idade < 18 || estudante === false); 
 */
// Questão 16
/* let idade = prompt("Qual sua idade?");

console.log(idade);

if (idade < 18) {
    console.log("Você é menor de idade");
} else if (idade >= 18) {
    console.log("Você é maior de idade");
} */

// Questão 17
/* let nota = prompt("Informe a sua nota");

console.log(nota);

if (nota >= 7) {
    console.log("Você foi aprovado");
} else if (nota < 7) {
    console.log("Você foi reprovado");
}  */

// Questão 18
/* let numero = prompt("Digite um número");

console.log(numero)

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é igual a zero");
}  */



// Questão 19
/* let valorCompra = prompt("Informe o valor da compra");
let valorTotal;

console.log("Valor da compra: ",valorCompra);

if (valorCompra > 500) {
    valorTotal = valorCompra - ((valorCompra * 15) / 100);
    console.log("Valor total após o desconto aplicado: ", valorTotal);
} else if (valorCompra >= 200 && valorCompra <= 500) {
    valorTotal = valorCompra - ((valorCompra * 10) / 100);
    console.log("Valor total após o desconto aplicado: ", valorTotal);
} else if (valorCompra < 200) {
    valorTotal = valorCompra;
    console.log("Valor total após o desconto aplicado: ", valorTotal);
} */

/* let nota1 = 14;
let nota2 = 16;
let media = (nota1 + nota2) / 2
console.log(media);
alert(media); */