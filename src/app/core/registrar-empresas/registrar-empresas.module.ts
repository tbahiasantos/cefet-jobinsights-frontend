import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarEmpresasComponent } from './registrar-empresas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';



@NgModule({
  declarations: [
    RegistrarEmpresasComponent
  ],
  imports: [
    CommonModule, PrimengModule, ReactiveFormsModule
  ]
})
export class RegistrarEmpresasModule { }
