import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDesignComponent } from './faq-design.component';

describe('FaqDesignComponent', () => {
  let component: FaqDesignComponent;
  let fixture: ComponentFixture<FaqDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
