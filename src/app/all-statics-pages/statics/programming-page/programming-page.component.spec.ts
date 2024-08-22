import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingPageComponent } from './programming-page.component';

describe('ProgrammingPageComponent', () => {
  let component: ProgrammingPageComponent;
  let fixture: ComponentFixture<ProgrammingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgrammingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgrammingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
