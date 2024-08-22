import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnlyticesPageComponent } from './data-anlytices-page.component';

describe('DataAnlyticesPageComponent', () => {
  let component: DataAnlyticesPageComponent;
  let fixture: ComponentFixture<DataAnlyticesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataAnlyticesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataAnlyticesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
