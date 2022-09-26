(() => {

  const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
  ];

  const secao = document.querySelector('.container');

  const div = document.createElement('div');
  
  for(i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
  }
  secao.appendChild(div);


})();