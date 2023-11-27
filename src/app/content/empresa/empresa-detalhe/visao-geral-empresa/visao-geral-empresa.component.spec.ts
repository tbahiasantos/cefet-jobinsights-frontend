import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoGeralEmpresaComponent } from './visao-geral-empresa.component';

describe('VisaoGeralEmpresaComponent', () => {
  let component: VisaoGeralEmpresaComponent;
  let fixture: ComponentFixture<VisaoGeralEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaoGeralEmpresaComponent]
    });
    fixture = TestBed.createComponent(VisaoGeralEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
