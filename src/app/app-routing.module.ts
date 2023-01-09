import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './Componentes/Componente1/comp1/comp1.component';
import { Comp2Component } from './Componentes/Componente2/comp2/comp2.component';
import { Comp3Component } from './Componentes/Componente3/comp3/comp3.component';

const routes: Routes = [
  {
    path: '', component: Comp1Component
  },
  {
    path: 'web1', component: Comp2Component
  },
  {
    path: 'web2', component: Comp3Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
