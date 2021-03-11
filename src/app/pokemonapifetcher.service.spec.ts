import { TestBed } from '@angular/core/testing';

import { PokemonapifetcherService } from './pokemonapifetcher.service';

describe('PokemonapifetcherService', () => {
  let service: PokemonapifetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonapifetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
