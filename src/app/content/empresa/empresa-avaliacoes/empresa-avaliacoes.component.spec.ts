import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaAvaliacoesComponent } from './empresa-avaliacoes.component';

describe('EmpresaAvaliacoesComponent', () => {
  let component: EmpresaAvaliacoesComponent;
  let fixture: ComponentFixture<EmpresaAvaliacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaAvaliacoesComponent]
    });
    fixture = TestBed.createComponent(EmpresaAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
