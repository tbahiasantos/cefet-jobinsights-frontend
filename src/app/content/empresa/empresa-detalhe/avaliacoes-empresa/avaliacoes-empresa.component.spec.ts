import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesEmpresaComponent } from './avaliacoes-empresa.component';

describe('AvaliacoesEmpresaComponent', () => {
  let component: AvaliacoesEmpresaComponent;
  let fixture: ComponentFixture<AvaliacoesEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliacoesEmpresaComponent]
    });
    fixture = TestBed.createComponent(AvaliacoesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
