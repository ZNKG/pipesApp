import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from './components/shared/shared.module';
import { VentasModule } from './components/ventas/ventas.module';

// Cambiar el locale de la app
// Forma 2
// import '@angular/common/locales/global/es-CL'
import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
import localeJa from '@angular/common/locales/ja';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localeEsCl);
registerLocaleData(localeJa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
