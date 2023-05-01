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

  onSubmit() {

    let dadosForm = {"nome":this.name, "email":this.email, "cpf":this.cpf, "celular":this.phone, "conhecimentos":this.knowledge}
    console.log(dadosForm);

    this.meuServico.submitForm(dadosForm);

  }


}
