import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernModusLpicComponent } from './lern-modus-lpic.component';

describe('LernModusLpicComponent', () => {
  let component: LernModusLpicComponent;
  let fixture: ComponentFixture<LernModusLpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernModusLpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernModusLpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
