import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { Empresa } from '../empresa-definitions';

@Component({
  selector: 'app-detalhe-list-empresa',
  templateUrl: './detalhe-list-empresa.component.html',
  styleUrls: ['./detalhe-list-empresa.component.scss']
})
export class DetalheListEmpresaComponent {

  @Input() empresas: Empresa[] = [];

  constructor(private router: Router) {

  }

  nota(empresa: Empresa): string {
    let nota: number = 0;
    empresa.avaliacoes.forEach(a => {
      nota += a.nota;
    });
    nota /= empresa.avaliacoes.length;
    return nota.toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  tamanho(empresa: Empresa): string {
    switch (empresa.tamanho) {
      case 1:
        return "< 500 Funcionários";
      case 2:
        return '500 - 1000 Funcionários';
      case 3:
        return '1000 - 5000 Funcionários';
      case 4:
        return '5000 - 10000 Funcionários';
      default:
        return "> 10000 Funcionários";
    }
  }

  avaliacoes(empresa: Empresa): string {
    return empresa.avaliacoes.length.toString() + ' ' + "Avaliações";
  }

  salarios(empresa: Empresa): string {
    return empresa.salarios.length.toString() + ' ' + "Salários";
  }

  escolheuEmpresa(empresa: Empresa) {
    StorageService.saveObject("", empresa);
    this.router.navigateByUrl('/home/empresa-detalhe')
  }

}
