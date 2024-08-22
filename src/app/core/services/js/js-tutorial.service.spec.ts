import { TestBed } from '@angular/core/testing';

import { JsTutorialService } from './js-tutorial.service';

describe('JsTutorialService', () => {
  let service: JsTutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsTutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
