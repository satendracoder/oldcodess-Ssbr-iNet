import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDefaultsPageComponent } from './js-defaults-page.component';

describe('JsDefaultsPageComponent', () => {
  let component: JsDefaultsPageComponent;
  let fixture: ComponentFixture<JsDefaultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsDefaultsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsDefaultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
