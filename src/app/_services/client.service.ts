import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/ms-st/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getExpensiveClientByCardFlag(): Observable<any> {
    return this.http.get(`${AUTH_API}`);
  }
}
