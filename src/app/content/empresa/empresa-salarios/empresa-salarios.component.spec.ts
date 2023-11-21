import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSalariosComponent } from './empresa-salarios.component';

describe('EmpresaSalariosComponent', () => {
  let component: EmpresaSalariosComponent;
  let fixture: ComponentFixture<EmpresaSalariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaSalariosComponent]
    });
    fixture = TestBed.createComponent(EmpresaSalariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
