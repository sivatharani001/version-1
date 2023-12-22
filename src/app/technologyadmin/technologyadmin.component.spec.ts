import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyadminComponent } from './technologyadmin.component';

describe('TechnologyadminComponent', () => {
  let component: TechnologyadminComponent;
  let fixture: ComponentFixture<TechnologyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
