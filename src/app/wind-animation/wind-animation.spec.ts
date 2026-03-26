import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindAnimation } from './wind-animation';

describe('WindAnimation', () => {
  let component: WindAnimation;
  let fixture: ComponentFixture<WindAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindAnimation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
