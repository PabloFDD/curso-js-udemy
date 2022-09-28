//Declaração de função(function hoisting)
// function falaOi(){
//   console.log('Salve');
// }

// //First-class objects
// // Function expression

// function executaFuncao(funcao){
//   funcao();
// }
// executaFuncao(falaOi);

// // Arrow function

// const funcaoArrow = () => {
//   console.log('Arrow function é dahora');
// }
// funcaoArrow();

// //Dentro de um objeto

// const obj = {
//   falar(){
//     console.log('Salve mano');
//   }
// };
// obj.falar();

// -------------------------------------------------------------------------------------------------------------------------------------

// Parâmetros
// Função sem "parametros", só funciona quando tem a palavra 'function'

// function funcao(){
//   let total = 0;
//   for (let argumento of arguments){
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(5, 10, 15, 20, 25);

// // é mais interessante usar desse jeito do que a forma de cima
// function funcao2(...args){
//   console.log(args);
// }

// funcao2('+', 0, 2, 3, 4);

//-------------------------------------------------------------------------------------------------------------------------------------

//Return
//Retorna um valor
//termina a função

// function criaMultiplicador(multiplicador){
//   function multiplicacao(n){
//     return n * multiplicador;
//   }
//   return multiplicacao;
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);

// console.log(duplica(2));
// console.log(triplica(2));

//-------------------------------------------------------------------------------------------------------------------------------------

// Closures
// Quando eu declaro a função e o dado/valor nao irá mais mudar
// Resumo: habilidade que a função tem em acessar o seu escopo lexico

// const retornaFuncao = (nome) => {
//   return function(){
//     return nome;
//   }
// };

// const funcao = retornaFuncao('Pablo');
// const funcao2 = retornaFuncao('Lauani');

// console.dir(funcao);
// console.dir(funcao2);

//-------------------------------------------------------------------------------------------------------------------------------------

// Funçoes de callback
 
// function rand(min = 1000, max = 3000) {
//   const num = Math.random() * (max - min) +
//     min;
//   return Math.floor(num);
// }

// function f1(callback) {
//   setTimeout(function() {
//     console.log('f1');
//     if (callback) callback();
//   }, rand());
// }

// function f2(callback) {
//   setTimeout(function() {
//     console.log('f2');
//     if (callback) callback();
//   }, rand());
// }

// function f3(callback) {
//   setTimeout(function() {
//     console.log('f3');
//     if (callback) callback();
//   }, rand());
// }

// f1(f1Callback);

// function f1Callback() {
//   f2(f2Callback);
// }

// function f2Callback() {
//   f3(f3Callback);
// }

// function f3Callback() {
//   console.log('Olá mundo!');
// }

//-------------------------------------------------------------------------------------------------------------------------------------

// Factory function (Função fábrica)

// function criaPessoa(nome, sobrenome, a, p) {
//   return {
//     nome,
//     sobrenome,

//     // Getter
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },

//     // Setter
//     set nomeCompleto(valor) {
//       valor = valor.split(' ');
//       this.nome = valor.shift();
//       this.sobrenome = valor.join(' ');
//     },

//     fala(assunto = 'falando sobre NADA') {
//       return `${this.nome} está ${assunto}.`;
//     },

//     altura: a,
//     peso: p,

//     // Getter
//     get imc() {
//       const indice = this.peso / (this.altura ** 2);
//       return indice.toFixed(2);
//     }
//   };
// }

// const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
// const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

// console.log(p1.imc);
// console.log(p2.imc);
// console.log(p3.imc);

//-------------------------------------------------------------------------------------------------------------------------------------

