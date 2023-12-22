import { TestBed } from '@angular/core/testing';

import { Api5Service } from './api5.service';

describe('Api5Service', () => {
  let service: Api5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
