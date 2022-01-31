import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ira } from './create-ira/create-ira.model';

@Injectable({
  providedIn: 'root'
})
export class IraService {
  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://pg-new-db.herokuapp.com/';
  }

  getIra(id: number): Observable<Ira> {
    return this.http.get<Ira>(this.url + 'accounts/' + id);
  }
  
  getIras(): Observable<any> {
    return this.http.get<any>(this.url + 'accounts');
  }

  createIra(newIra: Object): Observable<any> {
    return this.http.post<any>(this.url + 'accounts', newIra); 
  }

  getUser(id: number):Observable<any> {
    return this.http.get(this.url + 'users/' + id);
  }

  getUsers():Observable<any> {
    return this.http.get(this.url + 'users');
  }

  createInvestment(newInvestment: Object): Observable<any>{
    return this.http.post<any>(this.url + 'investments/', newInvestment);
  }

  getInvestments():Observable<any>{
    return this.http.get(this.url + 'investments');
  }

  deleteInvestment(id: number | undefined): Observable<any> {
    return this.http.delete(this.url + 'investments/' + id)
  }
}
