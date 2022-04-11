import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './components/ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './components/ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './components/ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './components/ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: 'basicos',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: 'basicos',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
