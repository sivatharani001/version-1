import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcommentComponent } from './viewcomment.component';

describe('ViewcommentComponent', () => {
  let component: ViewcommentComponent;
  let fixture: ComponentFixture<ViewcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
