import { TestBed } from '@angular/core/testing';

import { Api9Service } from './api9.service';

describe('Api9Service', () => {
  let service: Api9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
