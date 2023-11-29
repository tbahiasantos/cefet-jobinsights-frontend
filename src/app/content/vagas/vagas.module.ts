import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarVagaComponent } from './editar-vaga/editar-vaga.component';



@NgModule({
  declarations: [
    VagasComponent,
    EditarVagaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    VagasComponent,
    EditarVagaComponent
  ]
})
export class VagasModule { }
