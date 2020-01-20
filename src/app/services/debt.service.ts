import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Debt } from '../models/debt';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  findAll(): Observable<Debt[]> {
    return this.http.get<Debt[]>(`${this.config.serverUrl()}/debts`);
  }


  post(debt: Debt): Observable<Debt> {
    return this.http.post<Debt>(`${this.config.serverUrl()}/debts`, debt, options);
  }
}
