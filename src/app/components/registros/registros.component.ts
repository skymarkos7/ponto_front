import { Component } from '@angular/core';
import { MeuServicoService } from '../../meu-servico.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {
  dadosDaApi: any;
  modal: any = null;
  selectedItem: any = null;


  constructor(private meuServico: MeuServicoService) { }

  ngOnInit() {
    this.meuServico.getData().subscribe(data => {
      this.dadosDaApi = data.data;
      console.log(data.data);
    });
  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.modal = item;
  }



}
