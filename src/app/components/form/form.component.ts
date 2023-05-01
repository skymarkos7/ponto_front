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

    /**
     * Validarções CPF
     */
    const cpfInput:any = document.getElementById('cpf');
    cpfInput.oninput = function() {
      let cpf = cpfInput.value;
      cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o sétimo e o oitavo dígitos
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o décimo e o décimo primeiro dígitos (se houver)
      cpfInput.value = cpf;
    /**
     * Fim Validarções CPF
     */
    }

    let form:any = sessionStorage.getItem('form');
        this.msg = form.split('"');
        this.msg = this.msg[3];
        sessionStorage.clear();
  }

  onSubmit() {
    let dadosForm = {
      nome: this.name,
      email: this.email,
      cpf: this.cpf,
      celular: this.phone,
      conhecimentos: this.knowledge,
    };




    /**
     * Validação de campos vazios e email
     */
    if (
      this.name == undefined ||
      this.email == undefined ||
      this.cpf == undefined ||
      this.knowledge == undefined
    ) {
      this.msg = 'Preencha todos os campos obrigatórios.';
    } else {
      const email: any = this.email;
      if (validarEmail(email)) {
        this.meuServico.submitForm(dadosForm);


      } else {
        this.msg = 'O email é inválido.';
      }
      function validarEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    }
    /**
     * Fim Validação de campos vazios e email
     */
  }
}
