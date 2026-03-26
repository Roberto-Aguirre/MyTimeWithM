import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { intervalToDuration, getDaysInMonth, Duration } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal-page.html',
  styleUrls: ['./principal-page.css']
})
export class PrincipalPage implements OnInit {
  
  public duration!: Duration;
  public remain: number = 0;
  private readonly timeZone = 'America/Mexico_City';
  private frases = [
    "Cada día es una nueva oportunidad para amarte más.",
    "Eres mi sol en los días nublados.",
    "Contigo, cada momento es especial.",
    "Eres mi razón para sonreír cada día.",
    "Nuestro amor es mi mayor tesoro.",
    "Eres mi inspiración y mi fuerza.",
    "Cada día a tu lado es un regalo.",
    "Eres mi compañero de vida perfecto.",
    "Nuestro amor crece con cada día que pasa.",
    "Eres mi todo, mi amor eterno.",
    "Contigo, el tiempo se detiene y solo existimos tú y yo."
  ];
  public random = Math.floor(Math.random() * this.frases.length);

  ngOnInit(): void {
    this.calcularFechas();
  }

  calcularFechas() {
    // Fecha de inicio fija en UTC-06:00 (20 de Sep 2022)
    const startDate = new Date('2022-09-20T00:00:00-06:00');
    
    // Fecha actual convertida a la zona horaria deseada
    const now = new Date();
    const endDate = toZonedTime(now, this.timeZone);

    this.duration = intervalToDuration({ start: startDate, end: endDate });

    // Calculamos días restantes para el mes
    const daysInCurrentMonth = getDaysInMonth(endDate);
    this.remain = daysInCurrentMonth - (this.duration.days || 0);
  }

  getFrase(): string {
    return this.frases[this.random];
  }

}