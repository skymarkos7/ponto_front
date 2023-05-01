import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeuServicoService } from 'src/app/meu-servico.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  http: any;
  dadosDetails: any;

  constructor(private route: ActivatedRoute, private meuServico: MeuServicoService) {}

  ngOnInit() {
    let id = this.meuServico.getInformacoes();

    this.meuServico.getDetails(id).subscribe(data => {
      this.dadosDetails = data;
    });


  }

  mudaStatus() {
    let id = this.meuServico.getInformacoes();
    this.meuServico.status(id, undefined);

  }

}
