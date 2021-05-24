import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  @Input() seggiole;
  @Output() seleziona = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
