import { Component } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-prova2-componente1',
  templateUrl: './prova2-componente1.component.html',
  styleUrl: './prova2-componente1.component.css'
})
export class Prova2Componente1Component {
input2:string='';

constructor(private ms:ManagerService){}


sendInput(event:Event){
this.input2=(event.target as HTMLInputElement).value;
this.ms.updateObservableProva2(this.input2);
}
}
