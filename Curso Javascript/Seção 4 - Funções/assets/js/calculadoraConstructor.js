(() => {
//------------------------------------------- Utilizando Constructor Function--------------------------------

function Calculadora(){
  this.display = document.querySelector('.display');
  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) =>{
      const el = e.target;
      if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.apagaUltimo();
      if(el.classList.contains('btn-eq')) this.realizaConta();
    });
  };
  this.btnParaDisplay = (valor) => this.display.value += valor;
  this.inicia = () => this.cliqueBotoes();
  this.realizaConta = () => {
    try{
      conta = eval(this.display.value);
      if(!conta){
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);
    }catch(e){
      alert('Conta inválida');
      return;
    }
    
    this.clearDisplay = () => this.display.value = '';
    this.apagaUltimo = () => this.display.value = this.display.value.slice(0, -1);
  };
}
const calc = new Calculadora();
calc.inicia();
})();