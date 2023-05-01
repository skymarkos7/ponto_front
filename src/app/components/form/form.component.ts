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
  retorno: any;
  msg: any;

  constructor(
    private route: ActivatedRoute,
    private meuServico: MeuServicoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nome = params['nome'];
    });
  }

  onSubmit() {
    let dadosForm = {
      nome: this.name,
      email: this.email,
      cpf: this.cpf,
      celular: this.phone,
      conhecimentos: this.knowledge,
    };

    this.meuServico.submitForm(dadosForm);
    // let form:any = sessionStorage.getItem('form');
    // sessionStorage.clear();
    // this.msg = form.split('"');

    // console.log(this.msg[3]);

    if (
      this.name == undefined ||
      this.email == undefined ||
      this.cpf == undefined ||
      this.phone == undefined ||
      this.knowledge == undefined
    ) {
      this.msg = 'Preencha todos os campos';
    } else {
      const email: any = this.email;
      if (validarEmail(email)) {
      } else {
        this.msg ='O email é inválido.';
      }
      function validarEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    }
  }
}
