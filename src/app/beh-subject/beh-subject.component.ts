import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-beh-subject',
  templateUrl: './beh-subject.component.html',
  styleUrls: ['./beh-subject.component.css'], 
})
export class BehSubjectComponent implements OnInit, OnDestroy {
  // BehaviorSubject per condividere il valore
  numero = new BehaviorSubject<number>(0);

  // Subscription per gestire l'interval
  private intervalSubscription?: Subscription;

  ngOnInit(): void {
    // Iscriviti al BehaviorSubject per osservare i cambiamenti
    this.numero.subscribe((valore) => {
      console.log('Valore aggiornato dal BehaviorSubject:', valore);
    });

    // Avvia l'interval e aggiorna il BehaviorSubject
    this.goToInterval();
  }

  goToInterval() {
    const interval$ = interval(1000); // Ogni secondo
    this.intervalSubscription = interval$.subscribe((x) => {
      this.numero.next(x); // Aggiorna il valore nel BehaviorSubject
    });
  }

  ngOnDestroy(): void {
    // Evita perdite di memoria annullando la subscription
    this.intervalSubscription?.unsubscribe();
  }

  addTen(){
    this.numero.next(10);
  }
}
