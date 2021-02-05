import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() PasarPersona = new EventEmitter();
  nombre:string; 
  apellido:string;

  constructor() { }

  ngOnInit() {
  }

  add():void {
    this.PasarPersona.emit(`${this.nombre} ${this.apellido}`)
  }
}
