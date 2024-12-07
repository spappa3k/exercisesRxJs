import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrl: './intervals.component.css'
})
export class IntervalsComponent implements OnInit{

  public value:number=0;


  ngOnInit(): void {
    // il $ dopo il nome della variabile la imposta come Observable da poter sottoscrivere
    const interval$= interval(1000);  // interval e'importato da rxjs 

    interval$.subscribe(x=>{    //sottoscriviamo
      this.value=x;
    })
  }
}
