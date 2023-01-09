import { Component } from '@angular/core';
import { Route , Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
  
})
export class Comp1Component{
  constructor(private nav:Router) { }
  ngOnInit(): void {
    localStorage.clear();
  }
  userFound = false;
  nombre:any;
  searchUser() {
    if(this.nombre=="Alex Faican"){
      this.userFound = true;
      console.log("bien");
    }else{
      console.log("mal");
      this.userFound = false;
    }
  }
  almacenamiento(){
    localStorage.setItem('nombre',this.nombre.toString())
}}
