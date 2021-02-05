import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  personas: string[] = [];

  addPersona(event): void {
    this.personas.push(event)
  }
}
