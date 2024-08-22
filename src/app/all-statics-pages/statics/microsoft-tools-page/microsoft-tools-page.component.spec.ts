import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftToolsPageComponent } from './microsoft-tools-page.component';

describe('MicrosoftToolsPageComponent', () => {
  let component: MicrosoftToolsPageComponent;
  let fixture: ComponentFixture<MicrosoftToolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicrosoftToolsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrosoftToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
