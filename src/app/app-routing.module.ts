import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './content/home/home.module';
import { IndexComponent } from './content/index/index.component';
import { ConfirmationComponent } from './core/confirmation/confirmation.component';
import { LoginModule } from './core/login/login.module';
import { RegisterModule } from './core/register/register.module';
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
    path: 'home',
    loadChildren: () => import('./content/home/home.module').then(x => HomeModule),
    canActivate: [AlunoGuard]
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
