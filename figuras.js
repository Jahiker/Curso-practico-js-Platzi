// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
   return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd("Cuadrados");

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

console.groupEnd("Triangulos");

// Codigo del circulo
console.group("Circulos");
const PI = Math.PI;

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo (radio) {
    let diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return radio * radio * PI;
}

console.groupEnd("Circulos");

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    let input  = document.getElementById('inputCuadrado');
    let value = input.value;

    let perimetro = perimetroCuadrado(value);

    alert("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    let input  = document.getElementById('inputCuadrado');
    let value = input.value;

    let perimetro = areaCuadrado(value);

    alert("El area del cuadrado es: " + perimetro + " cm2");
}
