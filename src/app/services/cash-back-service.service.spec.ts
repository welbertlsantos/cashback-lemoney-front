import { TestBed, inject } from '@angular/core/testing';

import { CashBackServiceService } from './cash-back-service.service';

describe('CashBackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashBackServiceService]
    });
  });

  it('should be created', inject([CashBackServiceService], (service: CashBackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
