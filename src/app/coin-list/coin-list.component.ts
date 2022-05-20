import { CurrencyService } from './../service/currency.service';
import { ApiService } from './../service/api.service';
import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData !: any[];
  dataSource !: MatTableDataSource<any>;
  currency: string = 'INR'
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private api: ApiService, private route: Router, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency().subscribe(
      val => {
        this.currency = val
        this.getAllData();
        this.getBannerData();
      }
    )
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency).subscribe({
      next: res => {
        console.log(res)
        this.bannerData = res
      }
    })
  }
  getAllData() {
    this.api.getCurrencyData(this.currency)
      .subscribe(res => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)   //  將資料dump進tableDataSource中
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoDetails(row: any) {
    // console.log(row)
    this.route.navigate(['coin-detail', row.id]);
  }
}
