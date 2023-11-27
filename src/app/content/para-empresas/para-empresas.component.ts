import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-para-empresas',
  templateUrl: './para-empresas.component.html',
  styleUrls: ['./para-empresas.component.scss']
})
export class ParaEmpresasComponent {

  constructor(private readonly router: Router) {

  }

  telaRegistro() {
    this.router.navigateByUrl('/para-empresas/registrar');
  }

}
