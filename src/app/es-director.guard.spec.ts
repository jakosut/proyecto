import { TestBed } from '@angular/core/testing';

import { EsDirectorGuard } from './es-director.guard';

describe('EsDirectorGuard', () => {
  let guard: EsDirectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EsDirectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
