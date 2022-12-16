import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefModusLpicComponent } from './pruef-modus-lpic.component';

describe('PruefModusLpicComponent', () => {
  let component: PruefModusLpicComponent;
  let fixture: ComponentFixture<PruefModusLpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefModusLpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefModusLpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
