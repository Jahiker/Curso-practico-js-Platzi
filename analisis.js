// Helpers
function esPar(number) {
    return (number % 2 === 0);
}



const salariosCol = colombia.map(function (element) {
    return element.salary
})


const salariosColSorted = salariosCol.sort(function (salarioA, salarioB) {
    return salarioA - salarioB;
})


// Mediana General
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lenght)) {
        const mediana = (lista[mitad] - lista[mitad - 1]) / 2;
        return mediana;
    } else {
        const mediana = lista[mitad]
        return mediana;
    }

}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana 10%

const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaSalariosColTop10 = medianaSalarios(salariosColTop10);

