import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLayoutsComponent } from './css-layouts.component';

describe('CssLayoutsComponent', () => {
  let component: CssLayoutsComponent;
  let fixture: ComponentFixture<CssLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
