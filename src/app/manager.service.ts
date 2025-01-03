import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  // Crea un BehaviorSubject con un valore iniziale vuoto
  private inputSubject=new BehaviorSubject<string>('');
  private inputSubjectProva2=new BehaviorSubject<string>('');  // PARTE DELL ESERCIZIO 2

   // Observable pubblico a cui i componenti possono iscriversi
  input$=this.inputSubject.asObservable();
  inputProva2$=this.inputSubjectProva2.asObservable(); // PARTE DELL ESERCIZIO 2

  constructor() { }


  updateObservable(value:string){
    this.inputSubject.next(value) // Emette un nuovo valore
  }

  updateObservableProva2(value:string){
    this.inputSubjectProva2.next(value);
  }
}
