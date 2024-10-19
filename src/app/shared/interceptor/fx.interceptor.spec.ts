import {TestBed} from '@angular/core/testing';
import {HttpInterceptorFn} from '@angular/common/http';

import {fXInterceptor} from './fx.interceptor';

describe('fXInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => fXInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
