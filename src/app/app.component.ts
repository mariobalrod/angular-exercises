import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  operando1:number; 
  operando2:number; 
  resultado:number; 

  sumar():void {
    this.resultado = this.operando1 + this.operando2;
  }

  restar():void {
    this.resultado = this.operando1 - this.operando2;
  }

  multiplicar():void {
    this.resultado = this.operando1 * this.operando2;
  }

  dividir():void {
    this.resultado = this.operando1 / this.operando2;
  }
}
