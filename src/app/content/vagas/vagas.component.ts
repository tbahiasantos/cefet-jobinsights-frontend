import { Component } from '@angular/core';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Empresa, Vaga } from '../empresa/empresa-definitions';

export interface VAgaDTO {
  empresa: string;
  vaga: Vaga;
}

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent {

  listaVagas: VAgaDTO[] = [];

  constructor() {
    let listaEmpresas = StorageService.getObject("");
    listaEmpresas.forEach((e: { vagas: any[]; nome: any; }) => {
      if (e.vagas) {
        e.vagas.forEach(v => {
          this.listaVagas.push(
            {
              empresa: e.nome,
              vaga: v
            }
          );
        });
      }
    })
  }

  getSalario(vaga: Vaga): string {
    if (vaga.salario) {
      return "R$" + vaga.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return '';
  }

}
