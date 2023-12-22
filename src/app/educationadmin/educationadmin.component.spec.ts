import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationadminComponent } from './educationadmin.component';

describe('EducationadminComponent', () => {
  let component: EducationadminComponent;
  let fixture: ComponentFixture<EducationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
