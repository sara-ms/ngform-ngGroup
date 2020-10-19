import { TestBed } from '@angular/core/testing';

import { SarahService } from './sarah.service';

describe('SarahService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SarahService = TestBed.get(SarahService);
    expect(service).toBeTruthy();
  });
});
