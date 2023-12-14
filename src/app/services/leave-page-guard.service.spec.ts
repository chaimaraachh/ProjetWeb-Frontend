import { TestBed } from '@angular/core/testing';

import { LeavePageGuardService } from './leave-page-guard.service';

describe('LeavePageGuardService', () => {
  let service: LeavePageGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavePageGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
