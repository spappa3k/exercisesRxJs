import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component implements OnInit{
inputValue:string=''

constructor(private ms:ManagerService){}

ngOnInit(): void {
  
this.ms.input$.subscribe((value)=>{
this.inputValue=value;
})
}
}
