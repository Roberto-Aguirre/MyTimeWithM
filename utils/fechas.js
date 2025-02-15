const DatesCalculator = require('date-fns');

const fechas = {
    start: new Date(2022, 8, 20, 0, 0, 0),
    end: Date.now()
}

export default function obtenerFechas(){
    return DatesCalculator.intervalToDuration(fechas)
}