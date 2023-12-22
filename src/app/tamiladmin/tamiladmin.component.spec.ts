import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamiladminComponent } from './tamiladmin.component';

describe('TamiladminComponent', () => {
  let component: TamiladminComponent;
  let fixture: ComponentFixture<TamiladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamiladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
