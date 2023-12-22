import { TestBed } from '@angular/core/testing';

import { Api6Service } from './api6.service';

describe('Api6Service', () => {
  let service: Api6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
