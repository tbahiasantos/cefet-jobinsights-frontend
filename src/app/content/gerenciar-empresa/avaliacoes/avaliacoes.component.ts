import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/infra/token/token.service';
import { Avaliacao } from 'src/app/model/entity/avaliacoes.model';
import { AvaliacaoService } from 'src/app/service/avaliacao.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes: Avaliacao[] = [];

  constructor(
    private readonly avaliacaoService: AvaliacaoService,
    private readonly tokenService: TokenService
  ) {

  }

  ngOnInit(): void {
    const idEmpresa = this.tokenService.getTokenDTO().id;
    this.avaliacaoService.listarPorEmpresa(idEmpresa).subscribe(response => {
      this.avaliacoes = response;
    })
  }

  getLabelTitulo(avaliacao: Avaliacao): string {
    return `${avaliacao.titulo} ${avaliacao.nota.toLocaleString('pt', { minimumFractionDigits: 1 })} ★`;
  }

}
