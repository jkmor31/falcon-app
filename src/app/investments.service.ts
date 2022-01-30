import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://falcon-mutual-funds-service.herokuapp.com/mutual-funds/';
  }

  getInvestments(): Observable<any> {
    return this.http.get<any>(this.url).pipe(delay(500));
  }

}
