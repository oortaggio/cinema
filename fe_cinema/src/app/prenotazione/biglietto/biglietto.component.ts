import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-biglietto',
  templateUrl: './biglietto.component.html',
  styleUrls: ['./biglietto.component.css']
})
export class BigliettoComponent {

  @Input() postoAttuale;
  @Output() prenota = new EventEmitter();
  @Output() cancella = new EventEmitter();
  
  constructor() { }


  get Posto() { return (this.postoAttuale && this.postoAttuale.codice) ? this.postoAttuale.codice : [] }

  info = {
    codice: this.Posto,
    nome: "",
    occupato: true
  }
}
