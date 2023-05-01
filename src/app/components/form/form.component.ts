import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nome = params['nome'];
    });

    console.log(this.nome);
  }



  onSubmit() {
    console.log(`Nome: ${this.name}`);
    console.log(`E-mail: ${this.email}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Celular: ${this.phone}`);
    console.log(`Conhecimentos: ${this.knowledge}`);
  }

}
