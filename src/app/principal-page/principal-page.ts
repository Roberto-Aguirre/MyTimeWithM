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
    "Cada día aprovecho para amarte más.",
    "Siempre te extraño y quiero estar en tu corazon.",
    "Jamás uno sin el otro.",
    "Sé que podemos con todo lo que se nos atraviese.",
    "Amo pensarte en cada momento de mi día.",
    "Eres mi novia, mi esposa y mi amante.",
    "Todos los días me enamoro más de ti.",
    "¿Quisieras ser mi esposa?",
    "Vienen grandes cosas para nosotros, te amo.",
    "Eres la persona con la que amo estar, quiero besar tus cachetitos.",
    "Mi chiquita preciosa, hermosa, te amo como no tienes una idea."
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