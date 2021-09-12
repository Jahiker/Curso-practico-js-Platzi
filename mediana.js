const lista1 = [
    500000,
    100,
    2000,
    500,
    400000000,
    600
];

console.log(lista1)

lista1.sort(function (a, b) {
        return a - b;
})

console.log(lista1)

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    mediana = (lista1[mitadLista1] + lista1[mitadLista1 - 1]) / 2;
} else {
    mediana = lista1[mitadLista1];
}