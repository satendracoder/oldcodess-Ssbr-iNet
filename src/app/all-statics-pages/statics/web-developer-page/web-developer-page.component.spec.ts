import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperPageComponent } from './web-developer-page.component';

describe('WebDeveloperPageComponent', () => {
  let component: WebDeveloperPageComponent;
  let fixture: ComponentFixture<WebDeveloperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebDeveloperPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
