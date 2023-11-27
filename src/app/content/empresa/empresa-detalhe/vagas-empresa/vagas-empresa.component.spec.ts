import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasEmpresaComponent } from './vagas-empresa.component';

describe('VagasEmpresaComponent', () => {
  let component: VagasEmpresaComponent;
  let fixture: ComponentFixture<VagasEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VagasEmpresaComponent]
    });
    fixture = TestBed.createComponent(VagasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
