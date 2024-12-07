import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrl: './intervals.component.css'
})
export class IntervalsComponent{

  public value:number=0;



  countdownStarts(){
    const interval$= interval(1000); 
    interval$.subscribe(x=>{    //sottoscriviamo
      this.value=x;
    })
  }
}
