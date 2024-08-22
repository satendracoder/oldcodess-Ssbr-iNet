import { TestBed } from '@angular/core/testing';

import { CssTutorialService } from './css-tutorial.service';

describe('CssTutorialService', () => {
  let service: CssTutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssTutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
