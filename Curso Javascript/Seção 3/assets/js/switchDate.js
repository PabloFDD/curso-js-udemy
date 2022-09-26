(() => {
  const texto = document.querySelector('.hora');
  const data = new Date();
  texto.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
})();