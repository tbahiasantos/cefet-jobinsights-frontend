import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { EmpresaFilter, EmpresaResponse } from 'src/app/model/dto/empresa-dto.model';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {

  readonly form: FormGroup;
  readonly startForm: FormGroup;
  notasList: SelectItem[] = [];
  listaTamanhos: SelectItem[] = [];
  listaEmpresas: EmpresaResponse[] = [];
  orderByList: SelectItem[] = [];
  teste: number = 3;

  constructor(
    private readonly empresaService: EmpresaService
  ) {
    this.form = new FormGroup({
      nome: new FormControl(''),
      setor: new FormControl(''),
      tamanho: new FormControl(null),
      nota: new FormControl(null),
      orderBy: new FormControl(''),
      order: new FormControl(0)
    });
    this.startForm = new FormGroup({
      1: new FormControl(1),
      2: new FormControl(2),
      3: new FormControl(3),
      4: new FormControl(4),
      5: new FormControl(5),
    });
    this.initLists();
  }

  private initLists() {
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
    this.listaTamanhos = [
      {
        value: 1,
        label: '< 500 Funcionários'
      },
      {
        value: 2,
        label: '500 - 1000 Funcionários'
      },
      {
        value: 3,
        label: '1000 - 5000 Funcionários'
      },
      {
        value: 4,
        label: '5000 - 10000 Funcionários'
      },
      {
        value: 5,
        label: '> 10000 Funcionários'
      }
    ];
    this.orderByList = [
      {
        label: 'Nome da empresa',
        value: 'nome'
      },
      {
        label: 'Tamanho da empresa',
        value: 'tamanho'
      }
    ];
    this.pesquisar();
  }

  pesquisar() {
    const filter: EmpresaFilter = this.form.getRawValue() as EmpresaFilter;
    this.empresaService.pesquiar(filter).subscribe(response => {
      this.listaEmpresas = response;
    })
  }

  getStarRating(nota: number) {
    console.log(nota);

    return nota;
  }

}
