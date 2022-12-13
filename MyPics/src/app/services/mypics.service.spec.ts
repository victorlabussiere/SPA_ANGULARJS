import { TestBed } from '@angular/core/testing';

import { MypicsService } from './mypics.service';

describe('MypicsService', () => {
  let service: MypicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
