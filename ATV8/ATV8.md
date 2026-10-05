# EXERCÍCIO DE FIXAÇÃO \- INTRODUÇÃO A JAVASCRIPT

**QUESTÃO 1:**  
let nome \= "Gabriel Santos";   
let idade \= 20;   
let cidade \= "Feira de Santana";   
console.log(nome);   
console.log(idade);   
console.log(cidade);

**QUESTÃO 2:**  
Carlos  
20

**QUESTÃO 3:** Utilizei o let, já que é um tipo de variável que permite que seu valor seja alterado ao longo do código.

**QUESTÃO 4:** String, Number, Boolean e Number

**QUESTÃO 5:** Código corrigido

const nome \= "Lucas";  
let idade \= 18;  
console.log("Meu nome é ",  nome);  
console.log("Tenho ", idade, " anos");  

**QUESTÃO 6:**  
let a \= 5;  
let b \= 6;  
console.log(a \+ b);  
console.log(a \- b);  
console.log(a \* b);  
console.log(a / b);

**QUESTÃO 7:**   
console.log(10 \+ 5 \* 2);  → Será igual a 20, já que a multiplicação tem preferência na ordem das operações, então 10 \+ 5 \* 2 \= 10 \+ 10 \= 20\.

console.log((10 \+ 5\) \* 2);  → Será igual a 30, já que as operações dentro do parênteses são resolvidas primeira, então (10 \+ 5\) \* 2 \= 15 \* 2 \= 30  
console.log(20 / 4 \+ 3);  → Será igual a 8, já que a divisão tem preferência na ordem das operações, então 20 / 4 \+ 3 \= 5 \+ 3 \= 8\.

**QUESTÃO 8:**  
let teclado \= 120;   
let mouse \= 80;   
let totalCompra \= teclado \+ mouse;   
console.log(totalCompra);

**QUESTÃO 9:**  
let a \= 27;   
let b \= 4;   
let resto \= 27 % 4;   
console.log(resto);

**QUESTÃO 10:**  
let nota1 \= 7;   
let nota2 \= 8;   
let nota3 \= 9;   
let media \= (nota1 \+ nota2 \+ nota3) / 3;   
console.log(media);

**QUESTÃO 11:** O operador de comparação \== comparar se duas variáveis são iguais, porém não levando em consideração seus tipos, então algo como 2 \== "2" seria verdadeiro, mesmo o primeiro dois sendo Number e o segundo dois sendo uma String. Já o operador \=== não compara apenas o valor da variável, ele também compara os seus tipos, então nesse caso a situação anterior resultaria em falso, como mostrado no exemplo abaixo.  

let a \= 2;   
let b \= "2"; 

if (a \== b) {   
console.log(a, " e ", b, "são iguais");   
} else {   
console.log(a, " e ", b, "não são iguais");   
} 

if (a \=== b) {   
console.log(a, " e ", b, "são iguais");   
} else {   
console.log(a, " e ", b, "não são iguais");   
}

Console:  
2 ' e ' '2' 'são iguais'  
2 ' e ' '2' 'não são iguais'

**QUESTÃO 12:**  
console.log(10 \> 5);  → Verdadeiro, já que 10 é maior que 5\.  
console.log(8 \=== "8");  → Falso, já que 8 Number não é exatamente igual a 8 String, pois são tipos são diferentes.

console.log(7 \!== 7);  → Falso, já que 7 Number e 7 Number são exatamente iguais.

console.log(15 \<= 15);  **→** Verdadeiro, já que 15 é menor ou igual a 15\.

**QUESTÃO 13:**  
let usuario\_correto \= false;   
let senha\_correta \= false; 

if (usuario\_correto \=== true && senha\_correta \== true) {   
console.log("Sistema acessado com sucesso");   
} else {   
if (usuario\_correto \=== false) {   
console.log("Nome de usuário está incorreto");   
} else if (senha\_correta \=== false) {   
console.log("Senha está incorreta");   
} else if (usuario\_correto \=== false && senha\_correta \== false) {   
console.log("Nome de usuário e senha estão incorretos");   
}  
}

**QUESTÃO 14:**  
let nome \= "Gabriel";   
let idade \= 20;   
let let estudante \= true; 

if (estudante \=== true || idade \>= 60\) {   
console.log("Desconto foi liberado");   
} else {   
console.log("Desconto não foi liberado");   
}

**QUESTÃO 15:** A primeira expressão apresentada no console será verdadeiro, já que a variável idade é maior ou igual a 18, assim como a variável boolean estudante é true, como ambas estão sendo comparadas pelo operador && / AND, o resultado é verdadeiro. Já o resultado da segunda expressão é falso, já que a variável idade não é menor que 18, assim como a variável estudante não é false, como o operador sendo utilizado é  o OR / ||, o resultado será falso, já que pelo menos umas delas precisam ser verdadeiras.

**QUESTÃO 16:**  
let idade \= prompt("Qual sua idade?");   
console.log(idade);   
if (idade \< 18\) {   
console.log("Você é menor de idade");   
} else if (idade \>= 18\) {   
console.log("Você é maior de idade");   
}

**QUESTÃO 17:**   
let nota \= prompt("Informe a sua nota"); 

console.log(nota);   
if (nota \>= 7\) {   
console.log("Você foi aprovado");   
} else if (nota \< 7\) {   
console.log("Você foi reprovado");   
}

**QUESTÃO 18:**  
let numero \= prompt("Digite um número"); 

console.log(numero) 

if (numero \> 0\) {   
console.log("O número é positivo");   
} else if (numero \< 0\) {   
console.log("O número é negativo");   
} else {   
console.log("O número é igual a zero");   
}

**QUESTÃO 19:**   
let valorCompra \= prompt("Informe o valor da compra");   
let valorTotal; 

console.log("Valor da compra: ",valorCompra); 

if (valorCompra \> 500\) {   
valorTotal \= valorCompra \- ((valorCompra \* 15\) / 100);   
console.log("Valor total após o desconto aplicado: ", valorTotal);   
} else if (valorCompra \>= 200 && valorCompra \<= 500\) {   
valorTotal \= valorCompra \- ((valorCompra \* 10\) / 100);   
console.log("Valor total após o desconto aplicado: ", valorTotal);   
} else if (valorCompra \< 200\) {   
valorTotal \= valorCompra;   
console.log("Valor total após o desconto aplicado: ", valorTotal);   
}

