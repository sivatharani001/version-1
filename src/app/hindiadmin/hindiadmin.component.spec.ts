import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiadminComponent } from './hindiadmin.component';

describe('HindiadminComponent', () => {
  let component: HindiadminComponent;
  let fixture: ComponentFixture<HindiadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindiadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
