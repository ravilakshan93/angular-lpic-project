import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInTestModusComponent } from './fill-in-test-modus.component';

describe('FillInTestModusComponent', () => {
  let component: FillInTestModusComponent;
  let fixture: ComponentFixture<FillInTestModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInTestModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInTestModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
