(() =>{

  const tarefa = document.querySelector('.adicionar');
  const btnAdicionar = document.querySelector('.btn-adicionar');
  const lista = document.querySelector('.lista');
  
  tarefa.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
      if(!tarefa.value) return;
      addTarefa(tarefa.value);
    };
  });
  const limpaInput = () => {
    tarefa.value = '';
    tarefa.focus();
  }

  const apagar = (li) => {
    const btnApagar = document.createElement('button');
    li.innerHTML += ' ';
    btnApagar.innerHTML = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
  }
  document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('apagar')){
      el.parentElement.remove();
      salvarTarefas();
    }
  });

  const criaLi = () => {
    const li = document.createElement('li');
    return li;
  }
  btnAdicionar.addEventListener('click', () => {
    if(!tarefa.value) return;
    addTarefa(tarefa.value);
  });
  const addTarefa = (texto) =>{
    const li = criaLi();
    li.innerHTML = texto;
    lista.appendChild(li);
    limpaInput();
    apagar(li);
    salvarTarefas();
  }

  const salvarTarefas = () => {
    const liTarefas = lista.querySelectorAll('li');
    const listaTarefas = [];

    for(let lista of liTarefas){
      let tarefaTexto = lista.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }

  const addTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaTarefas){
      addTarefa(tarefa);
    }
  }
  addTarefasSalvas();
})();