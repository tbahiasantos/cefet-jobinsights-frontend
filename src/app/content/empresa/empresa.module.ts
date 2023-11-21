import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { DetalheListEmpresaComponent } from './detalhe-list-empresa/detalhe-list-empresa.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresaDetalheComponent } from './empresa-detalhe/empresa-detalhe.component';
import { EmpresaAvaliacoesComponent } from './empresa-avaliacoes/empresa-avaliacoes.component';
import { EmpresaSalariosComponent } from './empresa-salarios/empresa-salarios.component';
import { EmpresaVagasComponent } from './empresa-vagas/empresa-vagas.component';



@NgModule({
  declarations: [
    EmpresaComponent,
    DetalheListEmpresaComponent,
    EmpresaDetalheComponent,
    EmpresaAvaliacoesComponent,
    EmpresaSalariosComponent,
    EmpresaVagasComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    DetalheListEmpresaComponent
  ]
})
export class EmpresaModule { }
