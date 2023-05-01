import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MeuServicoService } from '../../meu-servico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  nome: any;
  formData: any;
  name: string | undefined;
  email: string | undefined;
  cpf: string | undefined;
  phone: string | undefined;
  knowledge: string | undefined;


  constructor(private route: ActivatedRoute, private meuServico: MeuServicoService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nome = params['nome'];
    });


  }

  onSubmit(formData: any) {
    // console.log(`Nome: ${this.name}`);
    // console.log(`E-mail: ${this.email}`);
    // console.log(`CPF: ${this.cpf}`);
    // console.log(`Celular: ${this.phone}`);
    // console.log(`Conhecimentos: ${this.knowledge}`);
    // console.log(this.formData);

    let dadosForm = {"nome":this.name, "email":this.email, "cpf":this.cpf, "celular":this.phone, "conhecimentos":this.knowledge}
    console.log(dadosForm);


    // console.log(this.dadosform);
    this.meuServico.submitForm(dadosForm);

    // this.http.post('http://127.0.0.1:8000/api/registrar', this.data).subscribe(
    //   (response: any) => {
    //     console.log('Resposta da API:', response);
    //   },
    //   (error: any) => {
    //     console.error('Erro na requisição:', error);
    //   }
    // );

    // const dados = {"nome":"jose", "email":"jose@hmail.com", "cpf":"555555", "celular":"555555", "conhecimentos":"python"}
    // const url = 'http://127.0.0.1:8000/api/registrar';
    // const body = JSON.stringify(dados);
    // return this.http.post(url, body, this.httpOptions)
    //            .subscribe(
    //              (response: any) => {
    //                console.log('Resposta da API:', response);
    //              },
    //              (error: any) => {
    //                console.error('Erro ao enviar dados:', error);
    //              }
    //            );
  }

  // submitForm(formData: any) {
  //   this.submitData(formData).subscribe(
  //     (response: any) => {
  //       console.log('Resposta da API:', response);
  //     },
  //     (error: any) => {
  //       console.error('Erro ao enviar dados:', error);
  //     }
  //   );
  // }

  // submitForm(formData: any) {
    // console.log('dadosssss');
    // const url = 'http://example.com/api/data';
    // const body = JSON.stringify(formData);
    // return this.http.post(url, body, this.httpOptions)
    //            .subscribe(
    //              (response: any) => {
    //                console.log('Resposta da API:', response);
    //              },
    //              (error: any) => {
    //                console.error('Erro ao enviar dados:', error);
    //              }
    //            );

    // this.http.post('http://exemplo.com/api/usuarios', this.data).subscribe(
    //   (response: any) => {
    //     console.log('Resposta da API:', response);
    //   },
    //   (error: any) => {
    //     console.error('Erro na requisição:', error);
    //   }
    // );
  // }
}
