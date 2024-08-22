import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGuidanceComponent } from './best-guidance.component';

describe('BestGuidanceComponent', () => {
  let component: BestGuidanceComponent;
  let fixture: ComponentFixture<BestGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestGuidanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
