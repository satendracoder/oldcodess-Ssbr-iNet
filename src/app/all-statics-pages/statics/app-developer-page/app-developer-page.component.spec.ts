import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeveloperPageComponent } from './app-developer-page.component';

describe('AppDeveloperPageComponent', () => {
  let component: AppDeveloperPageComponent;
  let fixture: ComponentFixture<AppDeveloperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDeveloperPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeveloperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
