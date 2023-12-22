import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheradminComponent } from './weatheradmin.component';

describe('WeatheradminComponent', () => {
  let component: WeatheradminComponent;
  let fixture: ComponentFixture<WeatheradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatheradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatheradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
