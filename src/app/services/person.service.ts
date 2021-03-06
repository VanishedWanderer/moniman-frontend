import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
    ) { }

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.config.serverUrl()}/persons`);
  }

  findOthers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.config.serverUrl()}/persons/others`);
  }

  getMe(): Observable<Person> {
    return this.http.get<Person>(`${this.config.serverUrl()}/persons/me`);
  }
}
