import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/infra/theme/theme.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  readonly form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      isBlackTheme: new FormControl(false)
    });
  }

  getToolTipText(): string {
    return this.form.controls['isBlackTheme'].value ? "Tema claro" : "Tema escuro";
  }

  navegate(path: string) {
    this.router.navigateByUrl("/" + path);
  }

}
