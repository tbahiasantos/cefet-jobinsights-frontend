import { Component } from '@angular/core';

export interface VAgaDTO {
  empresa: string;
}

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent {

  listaVagas: VAgaDTO[] = [];

  constructor() {

  }




}
