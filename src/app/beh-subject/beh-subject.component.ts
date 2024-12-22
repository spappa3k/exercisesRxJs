import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-beh-subject',
  templateUrl: './beh-subject.component.html',
  styleUrl: './beh-subject.component.css'
})

export class BehSubjectComponent implements OnInit{
numero = new BehaviorSubject<number>(0);

private intervalSubscribtion?:Subscription


ngOnInit(): void {
  console.log("numero:",this.numero);
  this.goToInterval();
}

goToInterval(){
  const interval$ = interval(1000);
}
}
