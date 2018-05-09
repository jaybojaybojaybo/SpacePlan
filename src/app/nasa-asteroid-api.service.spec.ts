import { TestBed, inject } from '@angular/core/testing';

import { NasaAsteroidApiService } from './nasa-asteroid-api.service';

describe('NasaAsteroidApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaAsteroidApiService]
    });
  });

  it('should be created', inject([NasaAsteroidApiService], (service: NasaAsteroidApiService) => {
    expect(service).toBeTruthy();
  }));
});
