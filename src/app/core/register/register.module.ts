import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { RegisterRoutingModule } from './register-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenusModule } from 'src/app/core/menus/menus.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule, PrimengModule, RegisterRoutingModule, ReactiveFormsModule, MenusModule
  ]
})
export class RegisterModule { }
