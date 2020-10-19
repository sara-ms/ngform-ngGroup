import { TestBed } from '@angular/core/testing';

import { ExempleServiceService } from './exemple-service.service';

describe('ExempleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExempleServiceService = TestBed.get(ExempleServiceService);
    expect(service).toBeTruthy();
  });
});
