import { TestBed } from '@angular/core/testing';

import { Api4Service } from './api4.service';

describe('Api4Service', () => {
  let service: Api4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
