import { TestBed } from '@angular/core/testing';

import { SoigneurService } from './soigneurs.service';

describe('SoigneursService', () => {
  let service: SoigneurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoigneurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
