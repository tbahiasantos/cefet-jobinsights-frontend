import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ITEMS_MENU_EMPRESA } from './menu-empresa-definitions';

@Component({
  selector: 'app-menu-empresa',
  templateUrl: './menu-empresa.component.html',
  styleUrls: ['./menu-empresa.component.scss']
})
export class MenuEmpresaComponent {

  constructor(private router: Router) {

  }

  items: MenuItem[] = ITEMS_MENU_EMPRESA;

  navegate(path: string) {
    this.router.navigateByUrl("/" + path)
  }

}
