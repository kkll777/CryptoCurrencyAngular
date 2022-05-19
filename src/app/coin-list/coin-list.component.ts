import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData !: any[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }

  getBannerData() {
    this.api.getTrendingCurrency('INR').subscribe({
      next: res => {
        console.log(res)
        this.bannerData = res
      }
    })
  }
  getAllData(){
    this.api.getCurrencyData('INR')
    .subscribe(res=>{
      console.log(res)
    })
  }

}
