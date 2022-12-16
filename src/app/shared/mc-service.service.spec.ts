import { TestBed } from '@angular/core/testing';

import { McServiceService } from './mc-service.service';

describe('McServiceService', () => {
  let service: McServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
