
let opcion = parseInt(prompt('Ingrese 1 si desea solicitar un prestamo \n Ingrese 2 si desea calcular pago en cuotas \n Ingrese 3 para salir'))

do{
    switch (opcion) {
        case 1:
            let montoPrestamo = parseInt(prompt('Ingrese el monto del prestamo que desea recibir o ingrese 1 para salir'))
            if (montoPrestamo != 1) {
                let total = calcularPrestamo(montoPrestamo)
                let tiempoPrestamo = parseInt(prompt('Seleccione en cuantos meses desea devolver el prestamo: \n 1 = 6 meses \n 2 = 12 meses \n 3 = 18 meses \n 4 = 24 meses \n 5 - Para salir'))
                if (tiempoPrestamo != 5) {
                    let totalCuotas = cuotasPrestamo(tiempoPrestamo, total)
                    console.log('Las cuotas son de: ' + totalCuotas)
                    console.log('El monto a devolver es: ' + total)
                }
            }
            opcion = parseInt(prompt('Ingrese 1 si desea solicitar un prestamo \n Ingrese 2 si desea calcular pago en cuotas \n Ingrese 3 para salir'))
            break;
        case 2:
            let montoFinanciado = parseInt(prompt('Ingrese el monto a financiar o ingrese 1 para salir'))
            if (montoFinanciado != 1) {
                let cantidadCuotasFinanciado = parseInt(prompt('Ingrese la cantidad de cuotas'))
                let cuotasFinanciadas = calcularFinanciacion(montoFinanciado, cantidadCuotasFinanciado)
                console.log('Las cuotas del monto a financiar es de: ' + cuotasFinanciadas)
            }
            opcion = parseInt(prompt('Ingrese 1 si desea solicitar un prestamo \n Ingrese 2 si desea calcular pago en cuotas \n Ingrese 3 para salir'))
            break;
        default:
            break;
    }
} while (opcion != 3)

function calcularPrestamo(monto){
    const tasaPrestamo = 0.4
    let totalPrestamo = monto + (monto * tasaPrestamo)
    return totalPrestamo
}

function cuotasPrestamo(tiempo, monto){
    let numCuotas = ''
    if (tiempo == 1) {
        numCuotas = 6
    } else if (tiempo == 2) {
        numCuotas = 12
    } else if (tiempo == 3) {
        numCuotas = 18
    } else if (tiempo == 4) {
        numCuotas = 24
    }

    let cuotas = monto / numCuotas
    return cuotas
}

function calcularFinanciacion(monto, cantidadCuotasF){
    const tasaFinanciacion = 0.1
    let totalFinancion = monto + (monto * tasaFinanciacion)
    let cuotas = totalFinancion / cantidadCuotasF

    return cuotas
}