import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCardComponent } from './digital-card.component';

describe('DigitalCardComponent', () => {
  let component: DigitalCardComponent;
  let fixture: ComponentFixture<DigitalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
