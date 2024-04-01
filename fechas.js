import { intervalToDuration } from "./node_modules/date-fns/index.mjs"

const fechas = {
    start: new Date(2022, 8, 20, 0, 0, 0),
    end: Date.now()
}

function obtenerFechas(){
    let diferencia = intervalToDuration(fechas)
    return diferencia
}

let fechasDiferencias = obtenerFechas();

let newFecha = {
    año: fechasDiferencias.years,
    meses: fechasDiferencias.months,
    dias: fechasDiferencias.days
}

export {newFecha}
