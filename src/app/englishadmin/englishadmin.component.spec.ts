import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishadminComponent } from './englishadmin.component';

describe('EnglishadminComponent', () => {
  let component: EnglishadminComponent;
  let fixture: ComponentFixture<EnglishadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
