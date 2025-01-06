import { TestBed } from '@angular/core/testing';

import { AttributeSelectorService } from '../attribute-selector.service';

describe('AttributeSelectorService', () => {
  let service: AttributeSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
