import { TestBed } from '@angular/core/testing';

import { BiddingServiceService } from './bidding-service.service';

describe('BiddingServiceService', () => {
  let service: BiddingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiddingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
