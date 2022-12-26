const inputPrecio = document.querySelector('#inputPrecio')
const inputCupon = document.querySelector('#inputCupon');
const outPut = document.querySelector('#result');
const btn = document.querySelector('#calcular');

// Array con obejos de Ejemplo para aplicarles metodos

const cupones = {
    'navidad' : 30,
    'diademuertos': 50,
    'urielo': 100
}





btn.addEventListener('click',calcularNuevoPrecio)

 function calcularNuevoPrecio(){
    
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;

    if (!precio || !cupon) {
        outPut.innerText = 'Por favor rellene los 2 campos'
        return
    }

    let discount;

    if (cupones[cupon]) {
        discount = cupones[cupon]
    } else {   
        outPut.innerText = 'Introduzca un Cupon valido';
        return
    }

    console.log(discount);

    const newPrice = (precio * (100 - discount) / 100);

    outPut.innerText = `El nuevo descuento es de ${newPrice}`
}