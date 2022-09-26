/* Aula 16 - Const e let */

// const nome = 'Pablo';
// const sobrenome = 'Felipe';
// const idade = 23;
// const peso = 86;
// const altura = 1.76;

// let imc = peso / (altura**2);
// let anoNascimento = 1999;
// console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}KG tem ${altura} de altura e seu imc é de ${imc.toFixed(1)}`);
// console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
/* ------------------------------------------------------------------------------------------------------------------------------------- */
/* Aula 22 - Solução*/
// const num1 = parseFloat(prompt('Digite um número: '));
// const num2 = parseFloat(prompt('Digite um número: '));

// const resultado = num1 + num2;

// alert(resultado);

/* ------------------------------------------------------------------------------------------------------------------------------------- */

/* Aula 23 - Exercício com variáveis */

// let varA = 'A';
// let varB = 'B';
// let varC = 'C';
// const varTemp = varA;

// varA = varB;
// varB = varC;
// varC = varTemp;

// console.log(varA, varB, varC);

/* ------------------------------------------------------------------------------------------------------------------------------------- */


/* Aula 25 - Exercícios com String */

// const nome = prompt('Digite seu nome completo: ');
// document.body.innerHTML = `O seu nome é: ${nome} <br />`
// document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`
// document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`
// document.body.innerHTML += `Qual o primeiro indice da letra no seu nome? ${nome.indexOf('e')} <br />`
// document.body.innerHTML += `Qual o ultimo indice da letra do seu nome? ${nome.lastIndexOf('e')} <br />`
// document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`
// document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`
// document.body.innerHTML += `Seu nome com letras minúsculas:  ${nome.toLowerCase()} <br />`

/* ------------------------------------------------------------------------------------------------------------------------------------- */


/* Aula 28 - Exercícios com number e Math */

// const num = Number(prompt('Digite um número: '));
// document.body.innerHTML = `O seu número é: ${num} <br />`;
// document.body.innerHTML += `Raiz quadrada ${Math.sqrt(num)} <br />`;
// document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br />`;
// document.body.innerHTML += `É NaN: ${isNaN(num)} <br />`;
// document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)} <br />`;
// document.body.innerHTML += `Arredondado para cima: ${Math.ceil(num)} <br />`;
// document.body.innerHTML += `Duas casas decimais ${num.toFixed(2)} <br />`;

/* ------------------------------------------------------------------------------------------------------------------------------------- */


/* Aula 34 - Exercícios para função, array e objetos */

(() => {
    const btn = document.querySelector('.btn');
    const pessoas = [];
    
    btn.addEventListener('click', event => {
        
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');
        const resultado = document.querySelector('.resultado');
        event.preventDefault();
        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
    });
})();
