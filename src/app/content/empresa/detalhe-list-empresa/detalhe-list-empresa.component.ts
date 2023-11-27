import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaResponse } from 'src/app/model/dto/empresa-dto.model';

@Component({
  selector: 'app-detalhe-list-empresa',
  templateUrl: './detalhe-list-empresa.component.html',
  styleUrls: ['./detalhe-list-empresa.component.scss']
})
export class DetalheListEmpresaComponent {

  @Input() empresa: EmpresaResponse = new EmpresaResponse;

  constructor(private router: Router) {

  }

  detalharEmpresa(id: number) {
    this.router.navigateByUrl("/carreira/empresas/detalhe?id=" + id)
  }


}
