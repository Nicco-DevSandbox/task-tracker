import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtaskOverlay } from './newtask-overlay';

describe('NewtaskOverlay', () => {
  let component: NewtaskOverlay;
  let fixture: ComponentFixture<NewtaskOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewtaskOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtaskOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
