import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariosEmpresaComponent } from './salarios-empresa.component';

describe('SalariosEmpresaComponent', () => {
  let component: SalariosEmpresaComponent;
  let fixture: ComponentFixture<SalariosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalariosEmpresaComponent]
    });
    fixture = TestBed.createComponent(SalariosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
