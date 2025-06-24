import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyOverlay } from './key-overlay';

describe('KeyOverlay', () => {
  let component: KeyOverlay;
  let fixture: ComponentFixture<KeyOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
