import { TestBed } from '@angular/core/testing';

import { Api10Service } from './api10.service';

describe('Api10Service', () => {
  let service: Api10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
