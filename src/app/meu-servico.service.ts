import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {
  constructor(private http: HttpClient) { }

  private informacoes: any;


  getData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/registros');
  }

  getDetails(id: any): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/detalhes/${id}`);

  }

  setInformacoes(dados: any) {
    this.informacoes = dados;
    console.log(this.informacoes);
  }

  getInformacoes(): any {
    return this.informacoes;
  }
}
