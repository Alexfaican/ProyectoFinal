import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './Componentes/Componente1/comp1/comp1.component';
import { Comp2Component } from './Componentes/Componente2/comp2/comp2.component';
import { Comp3Component } from './Componentes/Componente3/comp3/comp3.component';
import { Comp4Component } from './Componentes/Componente4/comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
