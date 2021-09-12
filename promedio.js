
function calcularPromedio(lista) {
    let sumaLista = 0;
    
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    })
    
    let promedioLista = sumaLista / lista.length;

    return promedioLista;
}