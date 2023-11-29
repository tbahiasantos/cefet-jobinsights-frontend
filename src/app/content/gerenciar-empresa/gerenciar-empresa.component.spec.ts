import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEmpresaComponent } from './gerenciar-empresa.component';

describe('GerenciarEmpresaComponent', () => {
  let component: GerenciarEmpresaComponent;
  let fixture: ComponentFixture<GerenciarEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarEmpresaComponent]
    });
    fixture = TestBed.createComponent(GerenciarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
