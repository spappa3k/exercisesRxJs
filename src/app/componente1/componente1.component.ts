import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
nomeUtente:string=''

constructor(private ms:ManagerService){}

immetti(event:Event){
this.nomeUtente= (event.target as HTMLInputElement).value; // casta per prendere l input dall evento
this.ms.updateObservable(this.nomeUtente); //mandiamo al Service
}
}
