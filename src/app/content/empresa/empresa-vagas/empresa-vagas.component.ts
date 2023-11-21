import { Component } from '@angular/core';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Vaga } from '../empresa-definitions';

@Component({
  selector: 'app-empresa-vagas',
  templateUrl: './empresa-vagas.component.html',
  styleUrls: ['./empresa-vagas.component.scss']
})
export class EmpresaVagasComponent {

  vagas: Vaga[] | undefined;

  constructor() {
    let empresa = StorageService.getObject("");
    this.vagas = empresa.vagas;
  }

  getSalario(vaga: Vaga): string {
    if (vaga.salario) {
      return "R$" + vaga.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return '';
  }

}
