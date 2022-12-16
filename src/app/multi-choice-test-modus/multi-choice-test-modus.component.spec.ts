import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceTestModusComponent } from './multi-choice-test-modus.component';

describe('MultiChoiceTestModusComponent', () => {
  let component: MultiChoiceTestModusComponent;
  let fixture: ComponentFixture<MultiChoiceTestModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiChoiceTestModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChoiceTestModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
