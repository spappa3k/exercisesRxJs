PASSI SEMPLICI PER FARE UN COLLEGAMENTO PER AGGIORNAMENTO IN TEMPO TREALE TRA DUE COMPONENTI

*- Crea un servizio con un BehaviorSubject:
private inputSubject = new BehaviorSubject<string>('');
input$ = this.inputSubject.asObservable();
updateInput(value: string) { this.inputSubject.next(value); }

*- Componente1: Usa un (input) per inviare il valore al servizio:
<input type="text" (input)="onInputChange($event)" />
onInputChange(event: Event) { const value = (event.target as HTMLInputElement).value; this.sharedService.updateInput(value); }

*- Componente2: Sottoscriviti al servizio per ricevere i dati:
ngOnInit() { this.sharedService.input$.subscribe(value => this.inputValue = value); }

*- Collega i componenti nel template principale:
<app-componente1></app-componente1>
<app-componente2></app-componente2>