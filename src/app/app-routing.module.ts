import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreiraModule } from './content/carreira/carreira.module';
import { IndexComponent } from './content/index/index.component';
import { ParaEmpresasComponent } from './content/para-empresas/para-empresas.component';
import { ConfirmationComponent } from './core/confirmation/confirmation.component';
import { LoginModule } from './core/login/login.module';
import { RegisterModule } from './core/register/register.module';
import { RegistrarEmpresasComponent } from './core/registrar-empresas/registrar-empresas.component';
import { PageNotFoundComponent } from './infra/404/page-not-found.component';
import { AlunoGuard } from './infra/guard/aluno.guard';
import { AuthGuard } from './infra/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then(x => LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./core/register/register.module').then(x => RegisterModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'carreira',
    loadChildren: () => import('./content/carreira/carreira.module').then(x => CarreiraModule),
    canActivate: [AlunoGuard]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'para-empresas',
    component: ParaEmpresasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'para-empresas/registrar',
    component: RegistrarEmpresasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
