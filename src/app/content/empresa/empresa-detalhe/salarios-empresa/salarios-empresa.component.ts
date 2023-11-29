import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/model/entity/empresa.model';
import { SalarioFilter, SalarioResponse } from 'src/app/model/entity/salario.model';
import { SalarioService } from 'src/app/service/salario.service';

@Component({
  selector: 'app-salarios-empresa',
  templateUrl: './salarios-empresa.component.html',
  styleUrls: ['./salarios-empresa.component.scss']
})
export class SalariosEmpresaComponent implements OnInit {

  @Input() empresa: Empresa = new Empresa;
  readonly form: FormGroup;
  listaSalarios: SalarioResponse[] = [];

  constructor(
    private readonly salarioService: SalarioService
  ) {
    this.form = new FormGroup({
      cargo: new FormControl(),
      idEmpresa: new FormControl(Validators.required),
      orderBy: new FormControl('cargo.nome'),
      order: new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.form.get("idEmpresa")?.setValue(this.empresa.id);
    this.pesquisar();
  }

  pesquisar() {
    if (this.form.valid) {
      const filter: SalarioFilter = this.form.getRawValue() as SalarioFilter;
      this.salarioService.buscar(filter).subscribe(response => {
        this.listaSalarios = response;
        for (let i = 0; i < 100; i++) {
          if (response.length > 0) {
            this.listaSalarios.push(response[0]);
          }
        }
      });
    }
  }

  getHeaderText(): string {
    return "Salários da empresa " + this.empresa.nome;
  }

  formatSalario(salario: number) {
    return "R$ " + Math.ceil(salario / 1000) + "mil"
  }

}

