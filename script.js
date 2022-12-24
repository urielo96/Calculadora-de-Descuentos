const inputCupon = document.querySelector('#inputCupon');
const outPut = document.querySelector('#result');
const btn = document.querySelector('#calcular');


const cupon = ['pedro','luis','juan'];

btn.addEventListener('click',aplicarCupon)


function aplicarCupon() {
    
    result = cupon.includes(inputCupon.value) 
    
    if (result == true) {
        alert('Tienes descuento')
    } else {
        alert('Introduzca un cupon valido')
    }

    }