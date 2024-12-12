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
private beepAudio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3');
counting:boolean=false;

  ngOnInit(): void {
    this.go();
  }

  go(){
    var timer$ = timer(3000, 1000);  // 3000ms time to wait before it starts and 1000ms the event created every second
    this.timerSubscribtion=timer$.subscribe((x)=>{
      this.value=x;

      if(this.value!=0){
        this.playBeep();
        this.counting=true;
        }else{
          this.counting=false;
        }
    })
  }

  timerReset(){
    this.timerSubscribtion?.unsubscribe();
    this.value=0;
    this.counting=false;
    this.go();
  }


  playBeep(){
    this.beepAudio.play();
   }


  
}
