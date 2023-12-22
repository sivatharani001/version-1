import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannadaadminComponent } from './kannadaadmin.component';

describe('KannadaadminComponent', () => {
  let component: KannadaadminComponent;
  let fixture: ComponentFixture<KannadaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KannadaadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KannadaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
