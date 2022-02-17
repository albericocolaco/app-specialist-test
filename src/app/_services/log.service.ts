import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/ms-st/log';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  sendLog(data: any): Observable<any> {
    return this.http.post(`${AUTH_API}`, data, httpOptions);
  }
}
