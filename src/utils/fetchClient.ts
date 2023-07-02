/* eslint-disable @typescript-eslint/no-explicit-any */

// const BASE_URL = 'https://api.currencyapi.com/v3/latest?apikey=n5ZZlNRPS7tJlper4VHdetYOHIehVwiInXx8xwxt';
const BASE_URL = 'https://api.currencyapi.com/v3/';

function request<T>(
  url: string,
): Promise<T> {
  const options: RequestInit = { method: 'GET' };

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
