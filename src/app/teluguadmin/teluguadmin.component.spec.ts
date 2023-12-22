import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguadminComponent } from './teluguadmin.component';

describe('TeluguadminComponent', () => {
  let component: TeluguadminComponent;
  let fixture: ComponentFixture<TeluguadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeluguadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeluguadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
