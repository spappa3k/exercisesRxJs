import { Component, OnInit } from '@angular/core';
import { concatMap, delayWhen, filter, mapTo, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent implements OnInit{
 value:number=0;
  obsOf?:Subscription

  ngOnInit(): void {
    let obs$= of(1,2,3,4,5,6,7,8,9,10);  // of crea un observable con qualsiasi tipo di dato

    obs$.pipe(
      filter(x=>x%2===0),//filtro i numeri pari in x
//concatMap: Processa ogni valore in sequenza, uno alla volta, assicurando che il successivo inizi solo quando il precedente è completato
//mapTo: trasforma il singolo valore 
      concatMap(x=>timer(1000).pipe(mapTo(x))) 
    )
    .subscribe(y=> // Qui usiamo "y" per rappresentare il valore filtrato, non uso x dinuovo per far capire
        { this.value=y; // assegno il valore di y a value
          console.log(this.value);
        }    
    )
  }
 
}
