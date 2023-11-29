import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/infra/token/token.service';
import { VagaFilterDTO, VagaResponseDTO } from 'src/app/model/entity/vaga.model';
import { vagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {

  vagas: VagaResponseDTO[] = [];
  displayCriarVaga: boolean = false;

  constructor(
    private readonly vagaService: vagaService,
    private readonly tokenService: TokenService
  ) {

  }

  ngOnInit(): void {
    this.pesquiasar();
  }

  pesquiasar() {
    const idEmpresa = this.tokenService.getTokenDTO().id;
    const filter: VagaFilterDTO = new VagaFilterDTO();
    filter.idEmpresa = idEmpresa;
    this.vagaService.buscar(filter).subscribe(response => {
      this.vagas = response;
    })
  }
  atualizarVagas() {
    this.pesquiasar();
  }

}
