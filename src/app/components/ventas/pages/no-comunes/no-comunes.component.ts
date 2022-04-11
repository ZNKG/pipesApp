import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
      #slice-pre {
        white-space: normal !important;
        overflow-wrap: break-word;
      }
    `,
  ],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Marge';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = [
    'Homero',
    'Marge',
    'Bart',
    'Lisa',
    'Maggie',
    'Ayudante de Santa',
    'Bola de nieve',
  ];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
    // 'other': `tenemos ${this.clientes.length} clientes esperando`,
  };

  cambiarPersona() {
    if (this.nombre === 'Marge') {
      this.nombre = 'Homero';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Marge';
      this.genero = 'femenino';
    }
  }

  quitarCliente() {
    this.clientes.shift();
    console.log(this.clientes);
  }

  // Keyvalue Pipe
  persona = {
    nombre: 'Matias',
    edad: 25,
    direccion: 'Villa Alemana, Chile',
  };

  // JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Robin', vuela: false },
    { nombre: 'Aquaman', vuela: false },
  ];

  // Async Pipe
  
  // este Interval imprime numeros hasta infinito, en lapsos de 1 seg 
  miObservable = interval(1000); // 0,1,2,3,4

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500);
  })

}
