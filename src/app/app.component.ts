import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BackgroundService } from './infra/background/background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobinsights_frontend';
  bgImage = '../assets/imagens/background/background.png';

  constructor(private readonly router: Router, bgService: BackgroundService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.bgImage = bgService.getBackgroudByUrl(router.url);
      }
    });
  }
}
