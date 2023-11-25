import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { EmpresaModule } from './content/empresa/empresa.module';
import { IndexComponent } from './content/index/index.component';
import { MenusModule } from './core/menus/menus.module';
import { VagasModule } from './content/vagas/vagas.module';
import { initializer } from './infra/initializer/app-init';
import { HttpHeadersInterceptor } from './infra/interceptor/http-request/http-request.service';
import { PrimengModule } from './infra/primeng/primeng.module';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MensagensModule } from './infra/mensagens/mensagens.module';
import { PageNotFoundComponent } from './infra/404/page-not-found.component';
import { ConfirmationComponent } from './core/confirmation/confirmation.component';
import { ParaEmpresasComponent } from './content/para-empresas/para-empresas.component';

@NgModule({
  declarations: [
    AppComponent, IndexComponent, PageNotFoundComponent, ConfirmationComponent, ParaEmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PrimengModule,
    EmpresaModule,
    VagasModule,
    ReactiveFormsModule,
    MenusModule,
    JwtModule,
    MensagensModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [AppConfig],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
