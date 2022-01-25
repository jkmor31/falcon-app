import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from './investments/investment.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://falcon-mutual-funds-service.herokuapp.com/mutual-funds/';
  }

  getInvestments(): Observable<any> {
    return this.http.get(this.url);
  }

}
