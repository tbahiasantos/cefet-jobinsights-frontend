import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-router.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, PrimengModule, LoginRoutingModule, ReactiveFormsModule
  ]
})
export class LoginModule { }
