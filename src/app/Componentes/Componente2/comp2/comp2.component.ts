import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  constructor(private nav:Router) { }
  Atras(){
    this.nav.navigate([''])
  }
}
