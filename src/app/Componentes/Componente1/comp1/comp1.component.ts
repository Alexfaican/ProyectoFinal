import { Component } from '@angular/core';
import { Route , Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
  
})
export class Comp1Component{
  constructor(private nav:Router) { }
  nombre:any;
  almacenamiento(){
    localStorage.setItem('nombre',this.nombre.toString())
  }
  search(){
    this.almacenamiento();
    if(this.nombre== "Alex Faican"){
      this.Pagina3();
      console.log("xd");
    }else{
      this.Pagina2();
      console.log("zz");
    }
  }
  Pagina3(){
    this.nav.navigate(['web2'])
  }
  Pagina2(){
    this.nav.navigate(['web1'])
  }
  }
 
  

