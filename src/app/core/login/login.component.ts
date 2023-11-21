import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/infra/mensagens/mensagens.service';
import { USER_KEY } from 'src/app/infra/storage/storage-definitions';
import { StorageService } from 'src/app/infra/storage/storage.service';
import { TokenDTO } from 'src/app/infra/token/token.model';
import { TokenService } from 'src/app/infra/token/token.service';
import { ItemCarousel } from 'src/app/model/components/item-carousel.mode';
import { LoginDTO } from 'src/app/model/dto/login.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  readonly form: FormGroup;
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  itemsCarousel: ItemCarousel[] = [];

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly mensagemService: MensagensService,
    private readonly tokenService: TokenService
  ) {
    this.form = new FormGroup({
      senha: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required)
    });
    this.itemsCarousel.push(
      {
        titulo: "Apresente o seu salário",
        descricao: "Apresente, de forma anônima, o salário que você recebe na empresa que você trabalha / estagia para auxiliar os seus colegas a saberem a media salarial do seu cargo na empresa que você está ingresso",
        urlImage: "../../../assets/imagens/login-carousel/salario.png"
      },
      {
        titulo: "Avalie sua empresa",
        descricao: "Apresente, de forma anônima, sua opinião e experiência em relação a empresa no qual você trabalha / estagia",
        urlImage: "../../../assets/imagens/login-carousel/avaliacao.png"
      },
      {
        titulo: "Pesquise por vagas de emprego / estágio",
        descricao: "Pesquise por vagas de emprego / estágio nas empresas cadastradas e nos seus cargos de interesse",
        urlImage: "../../../assets/imagens/login-carousel/vagas.png"
      }
    );
  }

  logar() {
    if (this.form.valid) {
      const user = this.form.getRawValue() as LoginDTO;
      this.authService.logar(user).subscribe(token => {
        StorageService.saveToken(token.token);
        const tokenDTO: TokenDTO = this.tokenService.getTokenDTO();
        if (tokenDTO.verificado) {
          this.mensagemService.mostrarMensagemComRetorno("Sucesso", "Login realizado com sucesso!").then(value => {
            this.router.navigateByUrl("/home");
          })
        } else {
          StorageService.removeToken();
          this.mensagemService.mostrarMensagemComRetorno("Erro", "Usuario não verificado").then(value => {

          })
        }
      },
        (error: HttpErrorResponse) => {
          this.mensagemService.mostrarMensagemComRetorno(error.error, "Senha ou Email / Login incorretos").then(value => {

          })
        })
    } else {
      this.mensagemService.mostrarMensagemComRetorno("Erro", "Digite o formulario corretamente").then(value => {

      })
    }
  }

  registrar() {
    this.router.navigateByUrl("/register");
  }

}
