import { Component, Input } from '@angular/core';
import { Empresa } from 'src/app/model/entity/empresa.model';

@Component({
  selector: 'app-visao-geral-empresa',
  templateUrl: './visao-geral-empresa.component.html',
  styleUrls: ['./visao-geral-empresa.component.scss']
})
export class VisaoGeralEmpresaComponent {

  @Input() empresa: Empresa = new Empresa;

  getHeaderText(): string {
    return "Visão geral da empresa " + this.empresa.nome + " " + this.generateNota() + "★";
  }

  private generateNota(): string {
    let nota = this.getSomaAvaliacoes() / this.empresa.avaliacoes.length;
    if (Number.isNaN(nota)) nota = 0;
    return nota.toLocaleString('pt', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  private getSomaAvaliacoes(): number {
    let soma = 0;
    this.empresa.avaliacoes.forEach(avaliacao => {
      soma += avaliacao.nota
    })
    return soma;
  }

}
