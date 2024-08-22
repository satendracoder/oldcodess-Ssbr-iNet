import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPageComponent } from './render-page.component';

describe('RenderPageComponent', () => {
  let component: RenderPageComponent;
  let fixture: ComponentFixture<RenderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
