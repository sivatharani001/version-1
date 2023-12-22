import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessadminComponent } from './businessadmin.component';

describe('BusinessadminComponent', () => {
  let component: BusinessadminComponent;
  let fixture: ComponentFixture<BusinessadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
