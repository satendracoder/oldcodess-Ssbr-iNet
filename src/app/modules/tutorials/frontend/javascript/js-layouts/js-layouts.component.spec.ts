import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLayoutsComponent } from './js-layouts.component';

describe('JsLayoutsComponent', () => {
  let component: JsLayoutsComponent;
  let fixture: ComponentFixture<JsLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsLayoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
