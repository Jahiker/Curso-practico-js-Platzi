let precioOriginal = 120;
let descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento;
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function printDiscountPrice() {
    let priceInput = document.getElementById('price');
    let price = priceInput.value;

    let discountInput = document.getElementById('discount')
    let discount = discountInput.value;

    let precioConDescuento = calcularPrecioConDescuento(price, discount);

    let resultPrice = document.getElementById('resultPrice');
    resultPrice.innerHTML = "<h2>El precio con descuento es $" + precioConDescuento + "</h2>";
}