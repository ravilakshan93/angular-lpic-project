import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPruefModusComponent } from './start-pruef-modus.component';

describe('StartPruefModusComponent', () => {
  let component: StartPruefModusComponent;
  let fixture: ComponentFixture<StartPruefModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPruefModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPruefModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
