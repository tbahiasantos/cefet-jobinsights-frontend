import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresaAvaliacoesComponent } from "../empresa/empresa-avaliacoes/empresa-avaliacoes.component";
import { EmpresaDetalheComponent } from "../empresa/empresa-detalhe/empresa-detalhe.component";
import { EmpresaSalariosComponent } from "../empresa/empresa-salarios/empresa-salarios.component";
import { EmpresaVagasComponent } from "../empresa/empresa-vagas/empresa-vagas.component";
import { EmpresaComponent } from "../empresa/empresa.component";
import { VagasComponent } from "../vagas/vagas.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'empresa',
                component: EmpresaComponent
            },
            {
                path: 'vagas',
                component: VagasComponent
            },
            {
                path: 'empresa-detalhe',
                component: EmpresaDetalheComponent,
                children: [
                    {
                        path: 'avaliacoes',
                        component: EmpresaAvaliacoesComponent
                    },
                    {
                        path: 'vagas',
                        component: EmpresaVagasComponent
                    },
                    {
                        path: 'salarios',
                        component: EmpresaSalariosComponent
                    },
                    {
                        path: '',
                        redirectTo: 'avaliacoes',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'empresa',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}