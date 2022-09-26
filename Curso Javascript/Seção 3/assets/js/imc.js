(() => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');

        function getImc(peso, altura){
            const imc = Number(peso.value / (altura.value ** 2));
            return imc.toFixed(1);
        }

        const imc = getImc(peso, altura);

        function setResultado(msg, isValid){
            const resultado = document.querySelector('.resultado');
            const p = criaP();
            p.innerHTML = msg;
            if(isValid === true){
                p.classList.add('right');
            }else{
                p.classList.add('error');
            }
            resultado.appendChild(p);
        }

        function criaP(){
            const p = document.createElement('p');
            return p;
        }
        if(peso.value >= 600 || peso.value <= 20){
            setResultado(`Peso inválido`, false);
            
        }else if(altura.value >= 2.75 || altura.value <= 0.71){
            setResultado(`Altura inválida`, false);
        }else{
            if(imc < 18.5){
                setResultado(`Seu IMC é ${imc} (Abaixo do peso)`, true);
            }else if(imc >= 18.5 && imc <= 24.9){
                setResultado(`Seu IMC é ${imc} (Peso normal)`, true);
            }else if(imc >= 25 && imc <= 29.9){
                setResultado(`Seu IMC é ${imc} (Sobrepeso)`, true);
            }else if(imc >= 30 && imc <= 34.9){
                setResultado(`Seu IMC é ${imc} (Obesidade grau 1)`, true);
            }else if(imc >= 35 && imc <= 39.9){
                setResultado(`Seu IMC é ${imc} (Obesidade grau 2)`, true);
            }else if(imc > 40){
                setResultado(`Seu IMC é ${imc} (Obesidade grau 3)`, true);
            }
        }
    });
})();