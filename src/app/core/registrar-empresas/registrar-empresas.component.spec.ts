import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpresasComponent } from './registrar-empresas.component';

describe('RegistrarEmpresasComponent', () => {
  let component: RegistrarEmpresasComponent;
  let fixture: ComponentFixture<RegistrarEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEmpresasComponent]
    });
    fixture = TestBed.createComponent(RegistrarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
