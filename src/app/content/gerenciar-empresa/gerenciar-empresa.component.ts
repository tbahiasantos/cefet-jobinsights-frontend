import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/infra/theme/theme.service';

@Component({
  selector: 'app-gerenciar-empresa',
  templateUrl: './gerenciar-empresa.component.html',
  styleUrls: ['./gerenciar-empresa.component.scss']
})
export class GerenciarEmpresaComponent {

  readonly form: FormGroup;

  constructor(private themeService: ThemeService, private readonly router: Router) {
    this.form = new FormGroup({
      isBlackTheme: new FormControl(false)
    });
  }

  changeTheme() {
    let isBlackTheme: boolean = this.form.controls['isBlackTheme'].value;
    if (isBlackTheme) {
      this.themeService.switchTheme("lara-dark-blue")
    } else {
      this.themeService.switchTheme("lara-light-blue")
    }
  }

  getToolTipText(): string {
    return this.form.controls['isBlackTheme'].value ? "Tema claro" : "Tema escuro";
  }

}
