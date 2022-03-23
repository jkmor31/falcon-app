import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Stock } from './stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stocksService: StocksService) { }

  ngOnInit(): void {
    this.stocksService.getStocks().subscribe(payload =>{
      this.stocks = payload;

    })
  }

}
