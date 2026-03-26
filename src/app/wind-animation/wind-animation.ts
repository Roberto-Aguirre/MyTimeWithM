import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, random, stagger } from 'animejs';

@Component({
  selector: 'app-wind-animation',
  templateUrl: './wind-animation.html',
  styleUrls: ['./wind-animation.css']
})
export class WindAnimation implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  hojas = new Array(15); 
  hojas1 = new Array(15);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateWind();
      this.animateWind1();
    }
  }

  animateWind() {
    const travelWidth = window.innerWidth + 140;

    animate('.wind-object', {
      x: {
        from: -140,
        to: travelWidth
      },
      translateY: (_el: unknown, _i: number) => {
        return random(-500, 500);
      },
      rotate: () => {
        return random(-15, 15);
      },
      loop: true,
      ease: 'inOutSine',
      duration: (_el: unknown, i: number) => 3200 + (i * 200),
      delay: stagger(400),
    });

    animate('.wind-object img', {
      rotate: [-10, 10],
      duration: 1200,
      alternate: true,
      loop: true,
      ease: 'out'
    });
  }

  animateWind1() {
    const travelWidth = window.innerWidth + 100;

    animate('.wind-object-1', {
      x: {
        from: -300,
        to: travelWidth
      },
      translateY: (_el: unknown, _i: number) => {
        return random(0, 50);
      },
      rotate: () => {
        return random(-15, 15);
      },
      loop: true,
      ease: 'in',
      duration: (_el: unknown, i: number) => 3200 + (i * 200),
      delay: stagger(600),
    });

    animate('.wind-object-1 img', {
      rotate: [-180, 30],
      duration: 4000,
      alternate: true,
      loop: true,
      ease: 'in'
    });
  }
}