const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const outPut = document.querySelector('#result');
const btn = document.querySelector('#calcular');


btn.addEventListener('click',CalcularPrecioConDescuento)

function CalcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    
    console.log({price,discount});
    
    
    if (!price || !discount){

        outPut.innerText = 'Uuups Ocurrio un Error'
        return
    }
    
    if (discount > 100){

        outPut.innerText = 'El descuento no puede ser mayor de 100'
        return
    }
    

    const newPrice = (price *  (100 - discount) / 100)

    outPut.innerText = `El precio con descuento es de $ ${newPrice}`

}
