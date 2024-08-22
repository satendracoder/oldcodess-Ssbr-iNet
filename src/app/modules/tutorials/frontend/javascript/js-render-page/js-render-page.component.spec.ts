import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRenderPageComponent } from './js-render-page.component';

describe('JsRenderPageComponent', () => {
  let component: JsRenderPageComponent;
  let fixture: ComponentFixture<JsRenderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsRenderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsRenderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
