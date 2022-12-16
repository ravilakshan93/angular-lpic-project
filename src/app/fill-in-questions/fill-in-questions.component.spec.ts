import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInQuestionsComponent } from './fill-in-questions.component';

describe('FillInQuestionsComponent', () => {
  let component: FillInQuestionsComponent;
  let fixture: ComponentFixture<FillInQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
