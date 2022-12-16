import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceQuestionsComponent } from './single-choice-questions.component';

describe('SingleChoiceQuestionsComponent', () => {
  let component: SingleChoiceQuestionsComponent;
  let fixture: ComponentFixture<SingleChoiceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChoiceQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
