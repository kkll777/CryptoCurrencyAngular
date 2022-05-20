import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private currencyService: CurrencyService) {

  }
  selectCurrency !: string;
  sendCurrency(event:any) {
    console.log(event)
    this.currencyService.setCurrency(event)
  }
}
