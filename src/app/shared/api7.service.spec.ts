import { TestBed } from '@angular/core/testing';

import { Api7Service } from './api7.service';

describe('Api7Service', () => {
  let service: Api7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
