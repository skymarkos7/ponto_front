import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParseLocation } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class MeuServicoService {
  constructor(private http: HttpClient) {}

  data = {
    nome: 'João',
    email: 'Silva',
    cpf: 'joao.silva@example.com',
    celular: '555555',
    conhecimentos: 'python',
  };

  getData(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/registros');
  }

  getDetails(id: any): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/detalhes/${id}`);
  }

  status(id: any, updatedData: undefined): void {
    this.http
      .put(`http://127.0.0.1:8000/api/validar/${id}`, { cpf: '555555' })
      .subscribe((resultado) => {
        console.log('Recurso atualizado:', resultado);
        document.location.reload();
      });
  }

  setInformacoes(dados: any) {
    sessionStorage.setItem('id', dados);

    console.log(dados);
  }

  getInformacoes(): any {
    return sessionStorage.getItem('id');
  }

  submitForm(dadosForm: {
    nome: string | undefined;
    email: string | undefined;
    cpf: string | undefined;
    celular: string | undefined;
    conhecimentos: string | undefined;
  }) {
    this.http.post('http://127.0.0.1:8000/api/registrar', dadosForm).subscribe(
      (response) => {
        console.log(response);
        const jsonString = JSON.stringify(response);
        sessionStorage.setItem('form', jsonString);
        document.location.reload();
      },
      (error) => {
        console.error('Erro na requisição:', error);
      }
    );

  }
}
