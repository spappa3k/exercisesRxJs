import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrl: './intervals.component.css'
})
export class IntervalsComponent {

  value: number = 0;
  counting: boolean = false
  private intervalSubscribtion?: Subscription // dichiariamo una sottoscrizione
  private beepAudio = new Audio('https://www.soundjay.com/buttons/sounds/beep-07a.mp3');


  countdownStarts() {
    this.counting = true;

    // il $ dopo il nome della variabile la imposta come Observable da poter sottoscrivere
    const interval$ = interval(1000);  // interval e'importato da rxjs 

    this.intervalSubscribtion = interval$.subscribe(x => {    //sottoscriviamo nella sottoscrizione
      this.value = x;

      if(this.value!=0){
      this.playBeep();
      }
    })
  }

  countdownStops() {
    this.counting = false;
    this.intervalSubscribtion?.unsubscribe();
    this.value = 0;
  }

  playBeep(){
   this.beepAudio.play();
  }
}
