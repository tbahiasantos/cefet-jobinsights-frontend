import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MensagensService } from 'src/app/infra/mensagens/mensagens.service';
import { TokenService } from 'src/app/infra/token/token.service';
import { ITEMS_MENU_EMPRESA } from './menu-empresa-definitions';

@Component({
  selector: 'app-menu-empresa',
  templateUrl: './menu-empresa.component.html',
  styleUrls: ['./menu-empresa.component.scss']
})
export class MenuEmpresaComponent {

  items: MenuItem[] = ITEMS_MENU_EMPRESA;
  menuSair: MenuItem = {
    label: 'Sair',
    icon: 'pi pi-sign-out',
    command: () => {
      this.mensagemService.mostrarMensagemSimNao("Logout", "Deseja sair do sistema?", "pi pi-sign-out").then(value => {
        if (value) {
          this.tokenService.logout();
        }
      });
    },
  }

  constructor(
    private router: Router,
    private readonly tokenService: TokenService,
    private readonly mensagemService: MensagensService
  ) {
    this.items.push(this.menuSair);
  }

  navegate(path: string) {
    this.router.navigateByUrl("/" + path)
  }

}
