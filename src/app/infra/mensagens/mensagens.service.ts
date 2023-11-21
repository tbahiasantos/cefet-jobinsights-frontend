import { Injectable } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private confirmationService: ConfirmationService) { }

  mostrarMensagem(titulo: string, texto: string, icone?: string, metodo?: () => void) {
    this.confirmationService.confirm({
      message: texto,
      header: titulo,
      icon: icone,
      rejectVisible: false,
      key: 'info',
      accept: () => {
        if (metodo != null) {
          metodo();
        }
      }
    });
  }

  mostrarMensagemComRetorno(titulo: string, texto: string, icone?: string) {
    return new Promise<boolean>(resolve => {
      this.confirmationService.confirm({
        message: texto,
        header: titulo,
        icon: icone,
        rejectVisible: false,
        key: 'info',
        accept: () => {
          resolve(true);
        },
        reject: () => {
          resolve(true);
        }
      });
    });
  }

  mostrarMensagemSimNao(titulo: string, texto: string, icone?: string) {
    return new Promise<boolean>(resolve => {
      this.confirmationService.confirm({
        message: texto,
        header: titulo,
        icon: icone,
        rejectVisible: true,
        key: 'excluir',
        accept: () => {
          resolve(true);
        },
        reject: () => {
          resolve(false);
        }
      });
    });
  }

}
