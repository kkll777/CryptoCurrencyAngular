import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCurrencyData(currency: string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  }
  getTrendingCurrency(currency: string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  getGraphicalCurrencyData(coinid: string, vs_currency: string, day: string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${vs_currency}&days=${day}`)
  }
  getCurrencyById(coinid: string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinid}`)
  }
}
