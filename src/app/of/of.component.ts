import { Component, OnInit } from '@angular/core';
import { filter, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent implements OnInit{
 value:number=0;
  obsOf?:Subscription

  ngOnInit(): void {
    let obs$= of(1,2,3,4,5);  // of crea un observable con qualsiasi tipo di dato

    obs$.pipe(
      filter(x=>x%2===0) //filtro i numeri pari in x
    )
    .subscribe(
      y=> // Qui usiamo "y" per rappresentare il valore filtrato, non uso x dinuovo per far capire
        { this.value=y} // assegno il valore di y a value
    )


  }


 
}
