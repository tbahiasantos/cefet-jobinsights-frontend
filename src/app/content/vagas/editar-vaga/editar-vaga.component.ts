import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MensagensService } from 'src/app/infra/mensagens/mensagens.service';
import { TokenService } from 'src/app/infra/token/token.service';
import { Cargo } from 'src/app/model/entity/cargo.model';
import { Vaga } from 'src/app/model/entity/vaga.model';
import { CargoService } from 'src/app/service/cargo.service';
import { vagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-editar-vaga',
  templateUrl: './editar-vaga.component.html',
  styleUrls: ['./editar-vaga.component.scss']
})
export class EditarVagaComponent {

  @Input() idVaga: number = 0;
  @Input() display: boolean = false;
  @Output() exit: EventEmitter<any> = new EventEmitter;
  @Output() vagaEditada: EventEmitter<any> = new EventEmitter;
  readonly form: FormGroup;
  listaCargos: SelectItem[] = [];
  listaTipoVaga: SelectItem[] = [];
  outroCargo: boolean = false;

  constructor(
    private readonly tokenService: TokenService,
    private readonly vagaService: vagaService,
    private readonly cargoService: CargoService,
    private readonly mensagemService: MensagensService
  ) {
    this.form = new FormGroup({
      id: new FormControl(),
      descricao: new FormControl('', Validators.required),
      salario: new FormControl(null), //
      tipoVaga: new FormControl(null, Validators.required), //
      idCargo: new FormControl(null, Validators.required), //
      idEmpresa: new FormControl('', Validators.required), //
      dataVaga: new FormControl(),
      vagaAtiva: new FormControl(),
      cargo: new FormControl(),
      novoCargo: new FormControl(null) //
    });
    this.iniciarListas();
  }

  private iniciarListas() {
    this.listaCargos = [];
    this.cargoService.listarTodos().subscribe(cargos => {
      cargos.forEach(cargo => {
        this.listaCargos.push(
          {
            label: cargo.nome,
            value: cargo.id
          }
        );
      })
      this.listaCargos.push(
        {
          label: "Outro",
          value: -1
        }
      );
    })
    this.listaTipoVaga = [
      {
        label: 'Estágio',
        value: "VAGA_ESTAGIO"
      },
      {
        label: 'Emprego',
        value: "VAGA_EMPREGO"
      }
    ];
  };

  fecharModal() {
    this.display = false
    this.exit.emit();
  }

  inicializar() {
    this.form.reset();
    this.vagaService.detalhar(this.idVaga).subscribe(vaga => {
      this.form.patchValue(vaga);
    });
  }

  onChangeCargo(event: any) {
    if (event.value === -1) {
      this.outroCargo = true;
      this.form.get('novoCargo')?.setValidators(Validators.required);
    } else {
      this.outroCargo = false;
      this.form.get('novoCargo')?.clearValidators();
    }
    this.form.get('novoCargo')?.updateValueAndValidity();
  }

  salvar() {
    const vaga: Vaga = this.form.getRawValue() as Vaga;
    if (this.form.get('idCargo')?.value === -1 && this.form.get('novoCargo')?.valid) {
      const cargo: Cargo = { id: 0, nome: this.form.get('novoCargo')?.value };
      vaga.cargo = cargo
    }
    this.mensagemService.mostrarMensagemSimNao("Editar", "Você irá alterar os dados de uma vaga ja cadastrada. Deseja prosseguir?").then(value => {
      if (value) {
        this.vagaService.salvar(vaga).subscribe(vaga => {
          this.mensagemService.mostrarMensagemComRetorno("Sucesso", "Vaga alterada com sucesso!").then(value => {
            this.display = false;
            this.vagaEditada.emit(vaga);
          });
        })
      }
    });

  }

}
