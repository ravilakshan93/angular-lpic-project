import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModusLpicComponent } from './test-modus-lpic.component';

describe('TestModusLpicComponent', () => {
  let component: TestModusLpicComponent;
  let fixture: ComponentFixture<TestModusLpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModusLpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModusLpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
