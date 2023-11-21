import { Component } from '@angular/core';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Salario } from '../empresa-definitions';

@Component({
  selector: 'app-empresa-salarios',
  templateUrl: './empresa-salarios.component.html',
  styleUrls: ['./empresa-salarios.component.scss']
})
export class EmpresaSalariosComponent {

  salarios: Salario[];

  constructor() {
    let empresa = StorageService.getObject("");
    this.salarios = empresa.salarios;
  }

  getSalario(salario: Salario): string {
    return "R$" + salario.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

}
