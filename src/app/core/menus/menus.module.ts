import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { MenuNavegatorComponent } from './menu-navegator/menu-navegator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuUsuarioComponent,
    MenuNavegatorComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ], exports: [
    MenuUsuarioComponent,
    MenuNavegatorComponent
  ]
})
export class MenusModule { }
