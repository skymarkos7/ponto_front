import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/registros');
  }

  getDetails(): Observable<any> {
    console.log('service');
    return this.http.get('http://127.0.0.1:8000/api/detalhes/1');

  }
}
