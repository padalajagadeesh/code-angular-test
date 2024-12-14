import { TestBed } from '@angular/core/testing';

import { SockatService } from './sockat.service';

describe('SockatService', () => {
  let service: SockatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SockatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
