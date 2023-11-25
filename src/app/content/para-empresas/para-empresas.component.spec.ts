import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaEmpresasComponent } from './para-empresas.component';

describe('ParaEmpresasComponent', () => {
  let component: ParaEmpresasComponent;
  let fixture: ComponentFixture<ParaEmpresasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaEmpresasComponent]
    });
    fixture = TestBed.createComponent(ParaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
