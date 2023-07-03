import { Component, Input } from '@angular/core';
import { Currencies } from 'src/types/Currencies';
import { Currency } from 'src/types/Currency';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @Input()
  currencies!: Currencies;

  valueFrom = '';
  currencyFrom: Currency = 'USD';
  valueTo = '';
  currencyTo: Currency = 'USD';

  validateInput(event: any) {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);

    if (!/^\d+$/.test(keyValue)) {
      event.preventDefault();
    }
  }

  recalcTo() {
    const UAH = Number(this.valueFrom) * this.currencies[this.currencyFrom];
    this.valueTo = (UAH / this.currencies[this.currencyTo]).toFixed(2);
  }

  recalcFrom() {
    const UAH = Number(this.valueTo) * this.currencies[this.currencyTo];
    this.valueFrom = (UAH / this.currencies[this.currencyFrom]).toFixed(2);
  }

  recalc() {
    this.recalcTo();
    this.recalcFrom();
  }
}
