const inputCupon = document.querySelector('#inputCupon');
const outPut = document.querySelector('#result');
const btn = document.querySelector('#calcular');


const cupon = ['pedro','luis','juan'];

btn.addEventListener('click',aplicarCupon)


function aplicarCupon() {
    
    
    for (let i = 0; i < cupon.length; i++) {
        result = (cupon[i]);
        
        console.log(result);
        console.log(inputCupon.value);
        if (result == inputCupon.value) {
            outPut.innerText = 'Felicidades tienes un 50 % de descuento'
            return
        } else {
            outPut.innerText = 'Introduce un Codigo Válido'
            
        }
    }
    }