import { TestBed } from '@angular/core/testing';

import { FiServiceService } from './fi-service.service';

describe('FiServiceService', () => {
  let service: FiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
