import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/model/entity/empresa.model';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-empresa-detalhe',
  templateUrl: './empresa-detalhe.component.html',
  styleUrls: ['./empresa-detalhe.component.scss']
})
export class EmpresaDetalheComponent {

  empresa: Empresa = new Empresa();
  showVisaoGeral: boolean = true;
  showAvaliacaoes: boolean = false;
  showVagas: boolean = false;
  showSalarios: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly empresaService: EmpresaService
  ) {
    const id = this.activatedRoute.snapshot.queryParamMap.has('id');
    if (id) {
      const id: number = (this.activatedRoute.snapshot.queryParamMap.get('id') as unknown) as number;
      this.empresaService.detalhar(id).subscribe(empresa => {
        this.empresa = empresa;
      })
    }
  }

  private disableViews() {
    this.showAvaliacaoes = false;
    this.showSalarios = false;
    this.showVagas = false;
    this.showVisaoGeral = false;
  }

  activeVisaoGeralView() {
    this.disableViews();
    this.showVisaoGeral = true;
  }

  activeAvaliacaoesView() {
    this.disableViews();
    this.showAvaliacaoes = true;
  }

  activeVagasView() {
    this.disableViews();
    this.showVagas = true;
  }

  activeSalariosView() {
    this.disableViews();
    this.showSalarios = true;
  }

}
