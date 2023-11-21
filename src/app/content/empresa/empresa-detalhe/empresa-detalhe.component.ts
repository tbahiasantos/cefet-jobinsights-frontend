import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Empresa } from '../empresa-definitions';

@Component({
  selector: 'app-empresa-detalhe',
  templateUrl: './empresa-detalhe.component.html',
  styleUrls: ['./empresa-detalhe.component.scss']
})
export class EmpresaDetalheComponent {

  empresa: Empresa;
  itens: MenuItem[];

  constructor(private router: Router) {
    this.empresa = StorageService.getObject("");
    this.itens = [
      { label: 'Avaliações', routerLink: '/home/empresa-detalhe/avaliacoes' },
      { label: 'Vagas', routerLink: '/home/empresa-detalhe/vagas' },
      { label: 'Salários', routerLink: '/home/empresa-detalhe/salarios' }
    ];
  }

  navegate(path: string) {
    this.router.navigateByUrl(path);
  }

}
