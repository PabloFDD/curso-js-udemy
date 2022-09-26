(()=>{

  const tempo = document.querySelector('.tempo');

  const getSeconds = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
      hour12:false,
      timeZone: 'GMT'
    });
  };
  let segundos = 0;
  let timer;
  const iniciaRelogio = ()=>{
    timer = setInterval(function(){
      segundos++;
      tempo.innerHTML = getSeconds(segundos);
    },1000);
  }

  document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('iniciar')){
      clearInterval(timer);
      iniciaRelogio();
      tempo.classList.remove('pausado');
    }
    if(el.classList.contains('pausar')){
      clearInterval(timer);
      tempo.classList.add('pausado');
    }
    if(el.classList.contains('zerar')){
      segundos = 0;
      clearInterval(timer);
      tempo.innerHTML = '00:00:00';
      tempo.classList.remove('pausado');
    }
  });
})();