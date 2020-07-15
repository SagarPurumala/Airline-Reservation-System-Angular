import { TestBed } from '@angular/core/testing';

import { ArsServicesService } from './ars-services.service';

describe('ArsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArsServicesService = TestBed.get(ArsServicesService);
    expect(service).toBeTruthy();
  });
});
