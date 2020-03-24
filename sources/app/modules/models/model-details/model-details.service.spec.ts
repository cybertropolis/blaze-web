import { TestBed, inject } from '@angular/core/testing';

import { ModelDetailsService } from './model-details.service';

describe('ModelDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelDetailsService]
    });
  });

  it('should be created', inject([ModelDetailsService], (service: ModelDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
