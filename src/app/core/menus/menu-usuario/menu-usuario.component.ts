import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MensagensService } from 'src/app/infra/mensagens/mensagens.service';
import { TokenService } from 'src/app/infra/token/token.service';
import { ItemMenuUsuario, MenuUsuario, MENU_USUARIO_DESLOGADO, MENU_USUARIO_LOGADO } from './menu-usuario-definitions';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent {

  menu: MenuUsuario = MENU_USUARIO_DESLOGADO;

  constructor(
    private readonly router: Router,
    private readonly tokenService: TokenService,
    private readonly mensagemService: MensagensService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (tokenService.isLoggin()) {
          this.menu = MENU_USUARIO_LOGADO;
        } else {
          this.menu = MENU_USUARIO_DESLOGADO;
        }
      }
    });
  }

  onClickItem(item: ItemMenuUsuario) {
    if (item.navegate) {
      item.navegate(this.router);
    }
    if (item.onClick) {
      item.onClick(this.tokenService, this.mensagemService);
    }

  }

}
