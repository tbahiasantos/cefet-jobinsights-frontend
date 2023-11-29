import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagasComponent } from './vagas.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VagasComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    VagasComponent
  ]
})
export class VagasModule { }
