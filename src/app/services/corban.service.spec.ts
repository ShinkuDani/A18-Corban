import { TestBed } from '@angular/core/testing';

import { CorbanService } from './corban.service';

describe('CorbanService', () => {
  let service: CorbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
