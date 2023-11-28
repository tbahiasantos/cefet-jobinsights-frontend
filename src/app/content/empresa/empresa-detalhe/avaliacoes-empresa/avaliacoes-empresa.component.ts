import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Avaliacao, AvaliacaoFilter } from 'src/app/model/entity/avaliacoes.model';
import { Empresa } from 'src/app/model/entity/empresa.model';
import { AvaliacaoService } from 'src/app/service/avaliacao.service';

@Component({
  selector: 'app-avaliacoes-empresa',
  templateUrl: './avaliacoes-empresa.component.html',
  styleUrls: ['./avaliacoes-empresa.component.scss']
})
export class AvaliacoesEmpresaComponent implements OnInit {

  @Input() empresa: Empresa = new Empresa;
  readonly form: FormGroup;
  readonly startForm: FormGroup;
  notasList: SelectItem[] = [
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
  listaAvaliacoes: Avaliacao[] = [];

  constructor(private readonly avaliacaoService: AvaliacaoService) {
    this.form = new FormGroup({
      nota: new FormControl(''),
      cargo: new FormControl(''),
      dataAvaliacao: new FormControl(''),
      idEmpresa: new FormControl(''),
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
    //this.pesquisar();
  }
  ngOnInit(): void {
    this.pesquisar();
  }

  getHeaderText(): string {
    return "Avaliações da empresa " + this.empresa.nome;
  }

  pesquisar() {
    this.form.get('idEmpresa')?.setValue(this.empresa.id);
    const filter = this.form.getRawValue() as AvaliacaoFilter;
    this.avaliacaoService.buscar(filter).subscribe(list => {
      this.listaAvaliacoes = list;
    })
  }

}
