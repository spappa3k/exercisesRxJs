import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit{
private timerSubscribtion?:Subscription
value:number=0;


  ngOnInit(): void {
    var timer$ = timer(3000, 1000);
    this.timerSubscribtion=timer$.subscribe((x)=>{
      this.value=x;
    })
  }



  
}
