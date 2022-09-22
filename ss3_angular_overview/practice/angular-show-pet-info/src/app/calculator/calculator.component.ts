import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  operator: string;
  result: any;


  constructor() {
  }

  ngOnInit(): void {
  }


  clickResult(number1: number, number2: number, operator: string) {
    switch (operator) {
      case "add":
        this.result = number1 + number2;
        break;
      case "minus":
        this.result = number1 - number2;
        break;
      case "multiply":
        this.result = number1 * number2;
        break;
      case "division":
        this.result = number1 / number2;
        break;

    }
  }
}
