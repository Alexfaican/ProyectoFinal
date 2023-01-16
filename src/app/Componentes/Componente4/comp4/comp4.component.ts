import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  constructor(private nav:Router) { }
  Atras(){
    this.nav.navigate([''])
  }
}
