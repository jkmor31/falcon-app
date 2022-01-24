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

  getIra(id: number): Observable<any> {
    return this.http.get(this.url + 'accounts/' + id);
  }

  createIra(newIra: Object): Observable<any> {
    return this.http.post<any>(this.url + 'accounts', newIra); 
  }

  getUser(id: number):Observable<any> {
    return this.http.get(this.url + 'users/' + id);
  }
}
