import {  intervalToDuration } from "date-fns";

const fechas = {
    start: new Date(2022, 8, 20, 0, 0, 0),
    end: Date.now()
}



function obtenerFechas(){
    let diferencia = intervalToDuration(fechas)
    return diferencia
}

let fechasDiferencias = obtenerFechas();
console.log(fechasDiferencias);

export {fechasDiferencias}
