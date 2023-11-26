import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreiraComponent } from './carreira.component';

describe('CarreiraComponent', () => {
  let component: CarreiraComponent;
  let fixture: ComponentFixture<CarreiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreiraComponent]
    });
    fixture = TestBed.createComponent(CarreiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
