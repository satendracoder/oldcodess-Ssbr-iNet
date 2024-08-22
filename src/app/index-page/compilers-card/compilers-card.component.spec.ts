import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilersCardComponent } from './compilers-card.component';

describe('CompilersCardComponent', () => {
  let component: CompilersCardComponent;
  let fixture: ComponentFixture<CompilersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompilersCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompilersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
