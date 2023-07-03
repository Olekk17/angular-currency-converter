import { Component, OnInit } from '@angular/core';
import { getCurrencies } from 'src/api/currencies';
import { CurrenciesFromServer } from 'src/types/CurrenciesFromServer';
import { Currencies } from 'src/types/Currencies';
import { recalcToUah } from 'src/utils/recalcToUah';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    try {
      const currenciesFromServer = await getCurrencies() as CurrenciesFromServer;
      const USD = Number(currenciesFromServer.data.UAH.value.toFixed(2));

      const EUR = recalcToUah(
        currenciesFromServer.data.EUR.value,
        currenciesFromServer.data.UAH.value
      );
      const GBP = recalcToUah(
        currenciesFromServer.data.GBP.value,
        currenciesFromServer.data.UAH.value
      );

      this.currencies = {
        USD,
        EUR,
        GBP,
        UAH: 1,
      }
    } catch {
      this.currencies = {
        USD: -1,
        EUR: -1,
        GBP: -1,
        UAH: 1,
      }
    }


  }

  title = 'currency-converter';
  currencies: Currencies = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    UAH: 1,
  };
}
