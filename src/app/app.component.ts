import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCryptoCurrencyPricePicker';
  selectCurrency !: string;
  sendCurrency(event:any) {
    console.log(event)
  }
}
