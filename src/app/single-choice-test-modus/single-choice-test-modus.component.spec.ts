import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceTestModusComponent } from './single-choice-test-modus.component';

describe('SingleChoiceTestModusComponent', () => {
  let component: SingleChoiceTestModusComponent;
  let fixture: ComponentFixture<SingleChoiceTestModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChoiceTestModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChoiceTestModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
