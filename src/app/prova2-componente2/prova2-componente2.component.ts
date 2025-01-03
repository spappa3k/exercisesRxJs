import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-prova2-componente2',
  templateUrl: './prova2-componente2.component.html',
  styleUrl: './prova2-componente2.component.css'
})
export class Prova2Componente2Component implements OnInit{
inputValueProva2:string=''

constructor(private ms:ManagerService){}

ngOnInit(): void {
  this.ms.inputProva2$.subscribe((value)=>{
this.inputValueProva2=value;
  })
}

}
