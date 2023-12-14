//DESAFIO 1
console.log ("Boas vindas terráqueos!"); 

//DESAFIO 2
let nome = "Caio Zanetti";
console.log (`Olá, ${nome}!`); 

//DESAFIO 3
let nome = "Caio Zanetti";
alert (`Olá, ${nome}!`); 

//DESAFIO 4
let respostaPergunta = prompt ("Qual sua linguagem de programação favorita?");
console.log (respostaPergunta);

//DESAFIO 5
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}`); 

//DESAFIO 6
let valor1 = 10;
let valor2 = 6;
let resultado = valor1 - valor2; 
console.log (`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`); 

//DESAFIO 7
let idade = prompt ("Qual a sua idade?");
if (idade > 17){
    console.log ("Você é maior de idade"); 
} else {
    console.log ("Você é menor de idade");
}

//DESAFIO 8
let numero = prompt ("Insira um número de sua escolha, positivo ou negativo"); 
if (numero > 0){
    console.log ("O número é positivo");
} else if (numero < 0) {
    console.log ("O número é negativo"); 
} else {
    console.log ("O número é igual a zero");
}

//DESAFIO 9
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++; 
}

//DESAFIO 10
let nota = 6;
if (nota >= 7) {
    console.log ("Você foi aprovado!"); 
} else {
    console.log ("Você foi reprovado!");
}

//DESAFIO 11
let numeroAleatorio = Math.random (); 
console.log (numeroAleatorio); 

//DESAFIO 12
let numeroAleatorio = parseInt (Math.random () * 10 + 1);
console.log (numeroAleatorio); 

//DESAFIO 13
let numeroAleatorio = parseInt (Math.random () * 1000 + 1);
console.log (numeroAleatorio); 
