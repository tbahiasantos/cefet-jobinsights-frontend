import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreiraComponent } from './carreira.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { CarreiraRoutingModule } from './carreira-routing.module';

@NgModule({
  declarations: [
    CarreiraComponent
  ],
  imports: [
    CommonModule, PrimengModule, CarreiraRoutingModule
  ]
})
export class CarreiraModule { }
