export enum Color {
  rojo, //0
  negro, //1
  azul, //2
  verde, //3
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
