import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from 'src/app/infra/mensagens/mensagens.service';
import { ConfirmationService } from 'src/app/service/confirmation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly confirmationService: ConfirmationService,
    private readonly mensagemService: MensagensService,
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {
    const isLoginEncodePresent = this.activatedRoute.snapshot.queryParamMap.has('loginEncode');
    if (isLoginEncodePresent) {
      const loginEncode = this.activatedRoute.snapshot.queryParamMap.get('loginEncode') as string;
      this.confirmationService.logar(loginEncode).subscribe(usuario => {
        this.mensagemService.mostrarMensagemComRetorno("Sucesso", "Sua conta foi validada com sucesso").then(value => {
          this.router.navigateByUrl("/login");
        })
      })
    } else {
      this.mensagemService.mostrarMensagemComRetorno("Erro", "Não foi possivel validar sua conta").then(value => {
        this.router.navigateByUrl("/login");
      })
    }
  }

}
