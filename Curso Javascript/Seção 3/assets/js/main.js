/* Aula 50 -  Atribuição via desestruturação (arrays) */

// const numeros = [1, 2, 3];
// const [n1, n2, n3] = numeros;

// console.log(n1, n2);

// -------------------------------------------------------------------------------------------------------------------------------------


/* Aula 51 -  Atribuição via desestruturação (objetos) */

// const pessoas = [
//   {nome: 'Pablo', sobrenome: 'Felipe'},
//   {nome: 'Rogerio', sobrenome: 'Leão'},
//   {nome: 'Lauani', sobrenome: 'Vitória'},
// ];

// for(let i = 0; i < pessoas.length; i++){
//   const {nome, sobrenome} = pessoas[i];

//   console.log(nome, sobrenome);
// }

// -------------------------------------------------------------------------------------------------------------------------------------

/* Aula 55 -  For in -> vem o indice (consegue buscar chaves dos objetos) */ 

// array

// const frutas = ['Maçã','Uva', 'Melancia', 'Banana' ];

// for(let i in frutas){
//   console.log(frutas[i]);
// }

// objeto

// const pessoas = {
//   nome: 'Pablo',
//   sobrenome: 'Felipe',
//   idade: 23
// };

// for(let k in pessoas){
//   console.log(k, pessoas[k]);
// };

// -------------------------------------------------------------------------------------------------------------------------------------

/* Aula 55 -  For of -> vem o valor (nao funciona com objetos) */

// const nome = 'Pablo Felipe Delboni';

// const nomes = nome.split(' ');

// for(let v of nomes){
//   console.log(v);
// }

// -------------------------------------------------------------------------------------------------------------------------------------

/* Exercicio 1 - Aula 60 */

// const maiorValor = (n1, n2) => n1 > n2 ? n1 : n2;


// console.log(maiorValor(100, 170));

// -------------------------------------------------------------------------------------------------------------------------------------

/* Exercicio 2 - Aula 61 */


// const isPaisagem = (largura, altura) => largura > altura; //Comparando assim já irá retornar true ou false

// console.log(isPaisagem(800, 1000));

// -------------------------------------------------------------------------------------------------------------------------------------

/* Exercicio 3 - Aula 62 */

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// const num = getRandomInt(0, 100);
// console.log(num);

// const funcFizzBuzz = num => {
//   if(num % 3 === 0 && num % 5 === 0){
//     return 'FizzBuzz';
//   }else if(num % 5 === 0){
//     return 'Buzz';
//   }else if(num % 3 === 0){
//     return 'Fizz';
//   }else if(num % 3 !== 0 && num % 5 !== 0){
//     return num;
//   }else if(typeof(num) !== 'number'){
//     return num;
//   }
  
// };
// console.log(funcFizzBuzz(num));

// console.log('a', funcFizzBuzz('a'));

// -------------------------------------------------------------------------------------------------------------------------------------

/* Aula 63 - try e catch */

// const soma = (n1, n2) => {
//   if(typeof n1 !== 'number' || typeof n2 !== 'number'){
//     throw new Error('x e y precisam ser números');
//   }
//   return n1 + n2;
// }

// try{
//   console.log(soma(1,3));
// }catch(e){
//   console.log('Deu ruim patrão');
// }

// -------------------------------------------------------------------------------------------------------------------------------------

/* Aula 65 - setInterval() e setTimeout() */

// const mostraHora = () => {
//   let data = new Date ();

//   return data.toLocaleTimeString('pt-BR',{
//     hour12: false
//   });
// };

// const timer = setInterval(function(){
//   console.log(mostraHora());
// }, 1000);

// setTimeout(function(){
//   clearInterval(timer);
// }, 5000);

// -------------------------------------------------------------------------------------------------------------------------------------

