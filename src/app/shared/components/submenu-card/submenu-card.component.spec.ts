import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuCardComponent } from './submenu-card.component';

describe('SubmenuCardComponent', () => {
  let component: SubmenuCardComponent;
  let fixture: ComponentFixture<SubmenuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmenuCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
