import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { SalarioComponent } from './salario/salario.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AvaliacaoComponent,
    SalarioComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    AvaliacaoComponent,
    SalarioComponent
  ]
})
export class CadastroModule { }
