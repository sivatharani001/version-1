import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalayalamadminComponent } from './malayalamadmin.component';

describe('MalayalamadminComponent', () => {
  let component: MalayalamadminComponent;
  let fixture: ComponentFixture<MalayalamadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalayalamadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalayalamadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
