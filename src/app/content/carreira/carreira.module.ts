import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreiraComponent } from './carreira.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { CarreiraRoutingModule } from './carreira-routing.module';
import { VagasComponent } from './vagas/vagas.component';
import { VagasModule } from '../vagas/vagas.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarreiraComponent,
    VagasComponent
  ],
  imports: [
    CommonModule, PrimengModule, CarreiraRoutingModule, VagasModule, ReactiveFormsModule
  ],
  exports: [

  ]
})
export class CarreiraModule { }
