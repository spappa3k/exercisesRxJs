import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit, OnDestroy{
private timerSubscribtion?:Subscription  // dichiariamo una sottoscrizione
value:number=0;
private beepAudio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3');
counting:boolean=false;

  ngOnInit(): void {
    this.go();
  }

  go(){
    
    // il $ dopo il nome della variabile la imposta come Observable da poter sottoscrivere
    var timer$ = timer(3000, 1000);  // aspetta 3000ms e poi genera eventi ogni 1000ms

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
    this.timerSubscribtion?.unsubscribe(); // smettiamo di ascoltare 
    this.value=0;
    this.counting=false;
    this.go();
  }


  playBeep(){
    this.beepAudio.play();
   }

   ngOnDestroy(): void {
    this.timerSubscribtion?.unsubscribe(); // smettiamo di ascoltare 
    this.value=0;
    this.counting=false;
   }

  
}
