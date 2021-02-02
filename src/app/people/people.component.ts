import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  personas: string[] = [];
  nombre:string; 
  apellido:string;

  add():void {
    this.personas.push(`${this.nombre} ${this.apellido}`)
  }
}
