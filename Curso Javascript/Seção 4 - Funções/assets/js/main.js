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

