(()=>{

const paragrafos = document.querySelector('.paragrafos');

const p = paragrafos.querySelectorAll('p'); 

for(let v of p){
  v.style.backgroundColor = 'var(--primary-color)';
  v.style.color = 'white';
}

})();