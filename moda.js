const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    3,
    2,
    2,
    2,
    1,
    4,
    3,
    1
];

function calcularModa(lista) {
    const listaCount = {};
    
    lista.map(function (element) {
        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    })
    
    const listaArray = Object.entries(listaCount).sort(function (a, b) {
        return a[1] - b[1];
    });
    
    const moda = listaArray[listaArray.length - 1][0];
    
    return moda;
}
