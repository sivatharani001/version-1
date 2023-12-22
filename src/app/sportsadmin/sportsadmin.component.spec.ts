import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsadminComponent } from './sportsadmin.component';

describe('SportsadminComponent', () => {
  let component: SportsadminComponent;
  let fixture: ComponentFixture<SportsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
