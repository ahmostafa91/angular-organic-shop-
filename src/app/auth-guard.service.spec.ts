import { TestBed } from '@angular/core/testing';

import { AuthGurdService } from './auth-guard.service';

describe('AuthGurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGurdService = TestBed.get(AuthGurdService);
    expect(service).toBeTruthy();
  });
});
