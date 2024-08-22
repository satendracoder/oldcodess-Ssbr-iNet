import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSidebarComponent } from './about-sidebar.component';

describe('AboutSidebarComponent', () => {
  let component: AboutSidebarComponent;
  let fixture: ComponentFixture<AboutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
