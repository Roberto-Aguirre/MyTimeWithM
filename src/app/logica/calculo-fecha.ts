import { intervalToDuration, getDaysInMonth, Duration } from 'date-fns';
import { toZonedTime } from 'date-fns-tz'; // Recomendado para manejar el UTC-6 en la fecha actual

export interface FechasResult {
  date: Duration;
  remain: number;
}

export function obtenerFechas(): FechasResult {
  // 1. Fijar la fecha de inicio en UTC-06:00 usando el formato ISO 8601.
  // Nota: En tu código original new Date(2022, 8, 20) es el 20 de Septiembre. 
  // En formato ISO, el mes de septiembre es '09'.
  const startDate = new Date('2022-09-20T00:00:00-06:00');

  // 2. Obtener la fecha actual y convertirla a la zona horaria UTC-06:00
  // Esto asegura que el "hoy" se evalúe correctamente según esa zona.
  const now = new Date();
  const endDate = toZonedTime(now, '-06:00'); 

  const comparingDates = {
    start: startDate,
    end: endDate
  };

  // 3. Obtener el intervalo
  const dateDuration = intervalToDuration(comparingDates);

  // 4. Calcular los días restantes.
  // Corrección: Le pasamos el objeto Date completo a getDaysInMonth
  const daysInCurrentMonth = getDaysInMonth(comparingDates.end);
  
  // Usamos (dateDuration.days ?? 0) para evitar errores si days es undefined
  const remain = daysInCurrentMonth - (dateDuration.days ?? 0);

  return {
    date: dateDuration,
    remain
  };
}