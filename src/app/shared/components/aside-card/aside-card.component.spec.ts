import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCardComponent } from './aside-card.component';

describe('AsideCardComponent', () => {
  let component: AsideCardComponent;
  let fixture: ComponentFixture<AsideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
