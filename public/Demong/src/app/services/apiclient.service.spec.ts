import { TestBed, inject } from '@angular/core/testing';

import { ApiclientService } from './apiclient.service';

describe('ApiclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiclientService]
    });
  });

  it('should be created', inject([ApiclientService], (service: ApiclientService) => {
    expect(service).toBeTruthy();
  }));
});
