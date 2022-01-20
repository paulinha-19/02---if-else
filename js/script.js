//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = Math.floor(Math.random() * 50);
maiorDeIdade = false;
if (idade > 18){
    document.getElementById("idade").innerHTML = `${idade} anos. Maior que 18.`
}else{
    document.getElementById("idade").innerHTML = `${idade} anos. Menor ou igual a 18.`
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
if (idade >= 18){
    maiorDeIdade = true;
    document.getElementById("maiorDeIdade").innerHTML = `Maior de idade? ${maiorDeIdade}.`
}else{
    document.getElementById("maiorDeIdade").innerHTML = `Maior de idade? ${maiorDeIdade}.`
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mesAniversario =  Math.floor(Math.random() * 12) + 1;
if(mesAniversario === 1){
    document.getElementById("mesAniversario").innerHTML = `Mês ${mesAniversario}. Faço aniversário em janeiro.`
}else if(mesAniversario === 12){
    document.getElementById("mesAniversario").innerHTML = `Mês ${mesAniversario}. Faço aniversário em dezembro.`
}else{
    document.getElementById("mesAniversario").innerHTML = `Mês ${mesAniversario}. Não faço aniversário em janeiro ou dezembro.`
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Paula";
const primeiraLetra = nome.charAt(0);
if(primeiraLetra === 'R'){
    document.getElementById("nome").innerHTML = `A primeira letra do nome ${nome} começa com a letra ${primeiraLetra}.`
}else{
    document.getElementById("nome").innerHTML = `A primeira letra do nome ${nome} não começa com R, começa com ${primeiraLetra}.`
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Soares Oliveira";
const tamanhoSobrenome = sobrenome.length-1;
if(tamanhoSobrenome > 6){
    document.getElementById("tamanhoSobrenome").innerHTML = `O sobrenome ${sobrenome} tem ${tamanhoSobrenome} letras, mais que 6.`
}else{
    document.getElementById("tamanhoSobrenome").innerHTML = `O sobrenome ${sobrenome} não tem mais 6 letras`
}