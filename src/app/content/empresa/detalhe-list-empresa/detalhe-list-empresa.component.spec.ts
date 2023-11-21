import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheListEmpresaComponent } from './detalhe-list-empresa.component';

describe('DetalheListEmpresaComponent', () => {
  let component: DetalheListEmpresaComponent;
  let fixture: ComponentFixture<DetalheListEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheListEmpresaComponent]
    });
    fixture = TestBed.createComponent(DetalheListEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
