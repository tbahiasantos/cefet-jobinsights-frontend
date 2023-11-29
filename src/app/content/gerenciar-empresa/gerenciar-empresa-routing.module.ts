import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VagasComponent } from "./vagas/vagas.component";
import { AvaliacoesComponent } from "./avaliacoes/avaliacoes.component";
import { GerenciarEmpresaComponent } from "./gerenciar-empresa.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { EmpresaGuard } from "src/app/infra/guard/empresa.guard";

const routes: Routes = [
    {
        path: '',
        component: GerenciarEmpresaComponent,
        children: [
            {
                path: 'perfil',
                component: PerfilComponent,
                canActivate: [EmpresaGuard]
            },
            {
                path: 'avaliacoes',
                component: AvaliacoesComponent,
                canActivate: [EmpresaGuard]

            },
            {
                path: 'vagas',
                component: VagasComponent,
                canActivate: [EmpresaGuard]

            },
            {
                path: '',
                redirectTo: 'perfil',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenciarEmpresaRoutingModule {

}