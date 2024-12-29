import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
nomeUtente:string=''

immetti(event:Event){
this.nomeUtente= (event.target as HTMLInputElement).value; // casta per prendere l input dall evento
}
}
