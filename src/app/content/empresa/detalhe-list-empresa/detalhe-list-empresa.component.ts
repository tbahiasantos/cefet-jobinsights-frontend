import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { EmpresaResponse } from 'src/app/model/dto/empresa-dto.model';
import { Empresa } from '../empresa-definitions';

@Component({
  selector: 'app-detalhe-list-empresa',
  templateUrl: './detalhe-list-empresa.component.html',
  styleUrls: ['./detalhe-list-empresa.component.scss']
})
export class DetalheListEmpresaComponent {

  @Input() empresa: EmpresaResponse = new EmpresaResponse;

  constructor(private router: Router) {

  }



}
