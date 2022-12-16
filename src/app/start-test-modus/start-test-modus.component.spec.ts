import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTestModusComponent } from './start-test-modus.component';

describe('StartTestModusComponent', () => {
  let component: StartTestModusComponent;
  let fixture: ComponentFixture<StartTestModusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTestModusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTestModusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
