import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Vaga, VagaResponseDTO } from 'src/app/model/entity/vaga.model';
import { vagaService } from 'src/app/service/vaga.service';
import { formatDate } from '@angular/common';

export interface VAgaDTO {
  empresa: string;
}

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent {

  vaga: Vaga = new Vaga();
  @Input() vagas: VagaResponseDTO[] = [];

  constructor(
    private readonly vagaService: vagaService
  ) {

  }

  changeVaga(vaga: VagaResponseDTO) {
    this.buscarVaga(vaga.id);
  }

  private buscarVaga(id: number) {
    this.vagaService.detalhar(id).subscribe(vaga => {
      this.vaga = vaga;
    });
  }

  getLabelSalario(vaga: VagaResponseDTO): string {
    if (vaga.salario) {
      let salario = Math.ceil(vaga.salario / 1000);
      if (salario < 1) {
        salario = 1;
      }
      return "R$ " + salario + "mil (estimativa da empresa)"
    }
    return "";
  }

  formatDate(vaga: VagaResponseDTO): string {
    return formatDate(vaga.dataVaga, 'dd/MM/yy', 'en-US');
  }

  formatSalario(vaga: Vaga) {
    return `R$${vaga.salario?.toLocaleString('pt', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }



}
