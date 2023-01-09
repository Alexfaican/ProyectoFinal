import { Component, OnInit } from '@angular/core';
import { Route , Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
  
})
export class Comp1Component{
  constructor(private nav:Router) { }
  nombre:any;
  ngOnInit(): void {
    localStorage.clear();
  }
  almacenamiento(){
    localStorage.setItem('nombre',this.nombre.toString())
  }
  Pagina3(){
    this.nav.navigate(['web2'])
    this.almacenamiento();
  }
  Pagina2(){
    this.nav.navigate(['web1'])
  }
  }
 
  

