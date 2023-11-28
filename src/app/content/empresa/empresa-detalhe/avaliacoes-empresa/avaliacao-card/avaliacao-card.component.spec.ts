import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoCardComponent } from './avaliacao-card.component';

describe('AvaliacaoCardComponent', () => {
  let component: AvaliacaoCardComponent;
  let fixture: ComponentFixture<AvaliacaoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliacaoCardComponent]
    });
    fixture = TestBed.createComponent(AvaliacaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
