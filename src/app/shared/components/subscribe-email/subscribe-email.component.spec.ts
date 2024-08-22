import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeEmailComponent } from './subscribe-email.component';

describe('SubscribeEmailComponent', () => {
  let component: SubscribeEmailComponent;
  let fixture: ComponentFixture<SubscribeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
