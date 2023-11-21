import { Component } from '@angular/core';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Empresa } from './empresa-definitions';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {

  listaEmpresas: Empresa[];

  constructor() {
    this.listaEmpresas = StorageService.getObject("");
  }

}
