import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent {
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
