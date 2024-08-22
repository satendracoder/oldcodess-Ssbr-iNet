import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSidebarComponent } from './css-sidebar.component';

describe('CssSidebarComponent', () => {
  let component: CssSidebarComponent;
  let fixture: ComponentFixture<CssSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
