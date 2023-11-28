import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Avaliacao } from 'src/app/model/entity/avaliacoes.model';

@Component({
  selector: 'app-avaliacao-card',
  templateUrl: './avaliacao-card.component.html',
  styleUrls: ['./avaliacao-card.component.scss']
})
export class AvaliacaoCardComponent implements OnInit {

  @Input() avaliacao: Avaliacao = new Avaliacao
  readonly form: FormGroup;
  notaFormat: string = "";

  constructor() {
    this.form = new FormGroup({
      idAluno: new FormControl(),
      idEmpresa: new FormControl(),
      nota: new FormControl(),
      titulo: new FormControl(),
      pros: new FormControl(),
      contra: new FormControl(),
      dataAvaliacao: new FormControl(),
      cargoAluno: new FormControl()
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.avaliacao);
    this.notaFormat = this.avaliacao.nota.toLocaleString('pt', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }



}
