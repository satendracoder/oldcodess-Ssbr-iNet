import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesPageComponent } from './databases-page.component';

describe('DatabasesPageComponent', () => {
  let component: DatabasesPageComponent;
  let fixture: ComponentFixture<DatabasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatabasesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatabasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
