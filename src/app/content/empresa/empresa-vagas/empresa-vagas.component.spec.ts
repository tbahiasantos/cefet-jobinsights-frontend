import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaVagasComponent } from './empresa-vagas.component';

describe('EmpresaVagasComponent', () => {
  let component: EmpresaVagasComponent;
  let fixture: ComponentFixture<EmpresaVagasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaVagasComponent]
    });
    fixture = TestBed.createComponent(EmpresaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
