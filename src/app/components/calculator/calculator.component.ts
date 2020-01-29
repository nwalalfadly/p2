import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() poids:number;
  @Input() taille:number;

  result="";

  IMCCalculator(){
    console.log(this.taille + "/" + this.poids)
    let X= this.taille / 100;
    let Y = X*X;

    let IMC = this.poids/Y;

    if (IMC <= 18.5) {
      this.result ="Underweight";
    } else if (IMC > 18.5 && IMC < 25) {
      this.result= "Healthy weight";
    } else if (IMC > 25 && IMC < 30) {
      this.result= "At risk of overweight";
    } else if (IMC > 30 && IMC < 35) {
      this.result= "Overweight";
    }
  }

}
