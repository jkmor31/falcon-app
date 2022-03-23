import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://falcon-stocks.herokuapp.com/stocks';
  }
  
  getStocks(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
