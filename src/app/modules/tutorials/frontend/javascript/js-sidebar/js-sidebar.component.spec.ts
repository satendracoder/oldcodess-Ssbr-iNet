import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSidebarComponent } from './js-sidebar.component';

describe('JsSidebarComponent', () => {
  let component: JsSidebarComponent;
  let fixture: ComponentFixture<JsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
