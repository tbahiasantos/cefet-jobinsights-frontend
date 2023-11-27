import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioComponent } from './salario.component';

describe('SalarioComponent', () => {
  let component: SalarioComponent;
  let fixture: ComponentFixture<SalarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarioComponent]
    });
    fixture = TestBed.createComponent(SalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
