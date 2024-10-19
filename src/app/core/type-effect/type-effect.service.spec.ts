import {TestBed} from '@angular/core/testing';

import {TypeEffectService} from './type-effect.service';

describe('TypeEffectService', () => {
  let service: TypeEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
