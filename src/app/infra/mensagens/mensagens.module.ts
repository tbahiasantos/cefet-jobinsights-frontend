import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens.component';
import { MensagensService } from './mensagens.service';
import { ConfirmationService } from 'primeng/api';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MensagensComponent
  ],
  providers: [
    ConfirmationService,
    MensagensService
  ]
})
export class MensagensModule { }
