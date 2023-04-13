import { TestBed } from '@angular/core/testing';

import { SafeHouseService } from './safe-house.service';

describe('SafeHouseService', () => {
  let service: SafeHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
