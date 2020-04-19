import { TestBed } from '@angular/core/testing';

import { LotteryComponentsService } from './lottery-components.service';

describe('LotteryComponentsService', () => {
  let service: LotteryComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotteryComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
