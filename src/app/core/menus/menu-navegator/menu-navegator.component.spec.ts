import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegatorComponent } from './menu-navegator.component';

describe('MenuNavegatorComponent', () => {
  let component: MenuNavegatorComponent;
  let fixture: ComponentFixture<MenuNavegatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNavegatorComponent]
    });
    fixture = TestBed.createComponent(MenuNavegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
