import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  // Crea un BehaviorSubject con un valore iniziale vuoto
  private inputSubject=new BehaviorSubject<string>('');

   // Observable pubblico a cui i componenti possono iscriversi
  input$=this.inputSubject.asObservable();

  constructor() { }


  updateObservable(value:string){
    this.inputSubject.next(value) // Emette un nuovo valore
  }
}
