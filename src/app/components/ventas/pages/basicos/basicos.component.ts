import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
    `
      li {
        white-space: normal !important;
        overflow-wrap: break-word;
      }
    `,
  ],
})
export class BasicosComponent {
  nombreLower: string = 'matias';
  nombreUpper: string = 'MATIAS';
  nombreCompleto: string = 'MaTiAS FuEnTES';

  fecha: Date = new Date(); //Día de hoy

  constructor() {}
}
