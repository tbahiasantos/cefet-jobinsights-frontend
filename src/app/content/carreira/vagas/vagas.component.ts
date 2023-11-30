import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
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
  form: FormGroup;
  readonly starForm: FormGroup;
  listaRange: SelectItem[] = [];
  listaTipoVaga: SelectItem[] = [];
  notasList: SelectItem[] = [];;

  constructor(
    private readonly vagaService: vagaService,
    private readonly tokenService: TokenService
  ) {
    this.form = new FormGroup({
      cargo: new FormControl(''),
      empresa: new FormControl(''),
      salario: new FormControl(null),
      notaEmpresa: new FormControl(null),
      rangeDate: new FormControl(null),
      tipoVaga: new FormControl(null),
      orderBy: new FormControl(),
      order: new FormControl(0)
    });
    this.starForm = new FormGroup({
      1: new FormControl(1),
      2: new FormControl(2),
      3: new FormControl(3),
      4: new FormControl(4),
      5: new FormControl(5),
    });
    this.iniciarListas();
  }

  private iniciarListas() {
    this.notasList = [
      {
        value: 1
      },
      {
        value: 2
      },
      {
        value: 3
      },
      {
        value: 4
      },
      {
        value: 5
      },
    ];
    this.listaTipoVaga = [
      {
        label: 'Estágio',
        value: "VAGA_ESTAGIO"
      },
      {
        label: 'Emprego',
        value: "VAGA_EMPREGO"
      }
    ];
    this.listaRange = [
      {
        value: 1,
        label: '1 dia'
      },
      {
        value: 7,
        label: '1 semana'
      },
      {
        value: 30,
        label: '1 mês'
      },
      {
        value: 365,
        label: '1 ano'
      },
    ];
  };

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    const filter: VagaFilterDTO = this.form.getRawValue();
    this.vagaService.buscarByUser(filter).subscribe(response => {
      this.vagas = response;
    })
  }

}
