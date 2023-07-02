type Currency = {
  code: string;
  value: number;
}

export type CurrenciesFromServer = {
  meta: {
    last_updated_at: string;
  },
  data: {
    UAH: Currency;
    EUR: Currency;
    GBP: Currency;
  }

}
