import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  itens: MenuItem[];

  constructor(private router: Router) {
    this.itens = [
      { label: 'Empresas', routerLink: '/home/empresa' },
      { label: 'Vagas', routerLink: '/home/vagas' }
    ];
  }

  toHome() {
    this.router.navigateByUrl('/home')
  }

}
