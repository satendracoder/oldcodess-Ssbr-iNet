import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssViewPageComponent } from './css-view-page.component';

describe('CssViewPageComponent', () => {
  let component: CssViewPageComponent;
  let fixture: ComponentFixture<CssViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
