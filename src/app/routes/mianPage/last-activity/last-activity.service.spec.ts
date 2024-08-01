import { TestBed } from '@angular/core/testing';

import { LastActivityService } from './last-activity.service';

describe('LastActivityService', () => {
  let service: LastActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
