import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WindAnimation } from './wind-animation/wind-animation';
import { PrincipalPage } from './principal-page/principal-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalPage, WindAnimation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-time-with-m');
}
