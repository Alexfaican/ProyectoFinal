import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  constructor(private nav:Router) { }
  nombre: any;
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar(){
    this.nombre = localStorage.getItem ('nombre');
  }
  Pagina4(){
    this.nav.navigate(['web3'])
  }
  Atras(){
    this.nav.navigate([''])
  }
}

