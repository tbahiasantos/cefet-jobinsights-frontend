import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarEmpresaComponent } from './gerenciar-empresa.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { GerenciarEmpresaRoutingModule } from './gerenciar-empresa-routing.module';
import { MenusModule } from 'src/app/core/menus/menus.module';
import { PerfilComponent } from './perfil/perfil.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { VagasComponent } from './vagas/vagas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarVagaComponent } from './vagas/criar-vaga/criar-vaga.component';
import { VagasModule } from '../vagas/vagas.module';



@NgModule({
  declarations: [
    GerenciarEmpresaComponent,
    PerfilComponent,
    AvaliacoesComponent,
    VagasComponent,
    CriarVagaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    GerenciarEmpresaRoutingModule,
    MenusModule,
    ReactiveFormsModule,
    VagasModule
  ],
  exports: [
    CriarVagaComponent
  ]
})
export class GerenciarEmpresaModule { }
