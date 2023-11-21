import { Component } from '@angular/core';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Avaliacao, Empresa } from '../empresa-definitions';

@Component({
  selector: 'app-empresa-avaliacoes',
  templateUrl: './empresa-avaliacoes.component.html',
  styleUrls: ['./empresa-avaliacoes.component.scss']
})
export class EmpresaAvaliacoesComponent {

  avaliacoes: Avaliacao[];

  constructor() {
    let empresa = StorageService.getObject("");
    this.avaliacoes = empresa.avaliacoes;
  }

}
