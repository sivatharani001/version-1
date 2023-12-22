import { TestBed } from '@angular/core/testing';

import { Api8Service } from './api8.service';

describe('Api8Service', () => {
  let service: Api8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
