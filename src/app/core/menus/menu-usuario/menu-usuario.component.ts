import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemMenuUsuario, MenuUsuario, MENU_USUARIO_DESLOGADO } from './menu-usuario-definitions';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent {

  menu: MenuUsuario = MENU_USUARIO_DESLOGADO;

  constructor(private router: Router) {

  }

  onClickItem(item: ItemMenuUsuario) {
    if (item.navegate) {
      item.navegate(this.router);
    }

  }

}
