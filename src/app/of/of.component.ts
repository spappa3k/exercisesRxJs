import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent implements OnInit{

  obsOf?:Subscription

  ngOnInit(): void {
    let obs$= of(1,2,3,4,5);  // of crea un observable con qualsiasi tipo di dato
  }


 
}
