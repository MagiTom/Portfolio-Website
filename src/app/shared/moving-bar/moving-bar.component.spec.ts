import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBarComponent } from './moving-bar.component';

describe('MovingBarComponent', () => {
  let component: MovingBarComponent;
  let fixture: ComponentFixture<MovingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
