import { TestBed, inject } from '@angular/core/testing';

import { CashBackService } from './cash-back-service';

describe('CashBackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CashBackService]
    });
  });

  it('should be created', inject([CashBackService], (service: CashBackService) => {
    expect(service).toBeTruthy();
  }));
});
