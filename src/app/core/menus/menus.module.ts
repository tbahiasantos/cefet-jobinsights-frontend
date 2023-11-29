import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { PrimengModule } from 'src/app/infra/primeng/primeng.module';
import { MenuNavegatorComponent } from './menu-navegator/menu-navegator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuEmpresaComponent } from './menu-empresa/menu-empresa.component';



@NgModule({
  declarations: [
    MenuUsuarioComponent,
    MenuNavegatorComponent,
    MenuEmpresaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ], exports: [
    MenuUsuarioComponent,
    MenuNavegatorComponent,
    MenuEmpresaComponent
  ]
})
export class MenusModule { }
